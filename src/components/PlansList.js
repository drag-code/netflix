import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db, {
	query,
	where,
	onSnapshot,
	collection,
	getDocs,
	addDoc,
} from "../config/firebase";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch } from "react-redux";
import { subscribe } from "../features/userSlice";

const PlansList = () => {
	const [products, setProducts] = useState([]);
	const [subscription, setSubscription] = useState(null);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCurrentPlan = async () => {
			const q = query(collection(db, `customers/${user.uid}/subscriptions`));
			const snapshot = await getDocs(q);
			snapshot.forEach(async (subscription) => {
				setSubscription({
					role: subscription.data().role,
					currentPeriodEnd: subscription.data().current_period_end.seconds,
					currentPeriodStart: subscription.data().current_period_start.seconds,
				});
				dispatch(subscribe({
					name: subscription.data().role	
				}))
			});
		};
		fetchCurrentPlan();
	}, [user.uid]);

	useEffect(() => {
		const fetchProducts = async () => {
			const q = query(collection(db, "products"), where("active", "==", true));
			const snapshot = await getDocs(q);
			const products = {};
			snapshot.forEach(async (doc) => {
				products[doc.id] = doc.data();
				const priceSnapshot = await getDocs(
					query(collection(db, `${doc.ref.path}/prices`))
				);
				priceSnapshot.forEach((price) => {
					products[doc.id].prices = {
						priceId: price.id,
						data: price.data(),
					};
				});
			});
			setProducts(products);
		};
		fetchProducts();
	}, []);

	const makeCheckout = async (priceId) => {
		const checkOutSessionsRef = collection(
			db,
			`customers/${user.uid}/checkout_sessions`
		);
		const customer = await addDoc(checkOutSessionsRef, {
			price: priceId,
			success_url: window.location.origin,
			cancel_url: window.location.origin,
		});

		onSnapshot(customer, async (snapshot) => {
			const { error, sessionId } = snapshot.data();
			if (error) {
				alert(`An error ha ocurred ${error.message}`);
			}
			if (sessionId) {
				// There is a session, you can redirect to checkout
				const stripe = await loadStripe(
					"pk_test_51Ip10vB4vBQ9VkHw1Weo8ZnRzUCihe0UvhZ0NN0r1Af05yobPDEJ3d7ECw7uOXvYn5yz8TOzRWZOxoM9bXdo0xHF00bTxoQZ5v"
				);
				stripe.redirectToCheckout({ sessionId });
			}
		});
	};

	return (
		<div>
			<p>{subscription && `Renewal date: ${new Date(subscription.currentPeriodEnd * 1000).toLocaleDateString()}`}</p>
			<ul className="profilePage__accountDetailsPlans">
				{Object.entries(products).map(([productId, productData]) => {
					const isCurrentPlan = productData.name
						.toLowerCase()
						.includes(subscription?.role);
					return (
						<li key={productId} className="profilePage__accountDetailsPlanItem">
							<h5>
								{productData.name} <br /> {productData.description}
							</h5>
							<button
								onClick={() => !isCurrentPlan && makeCheckout(productData.prices.priceId)}
								className={`profilePage__subscribeButton ${
									isCurrentPlan && "profilePage__subscribedButton"
								}`}>
								{isCurrentPlan ? "Cancel" : "Subscribe"}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PlansList;
