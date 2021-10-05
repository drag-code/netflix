import React from "react";
import { useSelector } from "react-redux";
import { selectSubscription, selectUser } from "../features/userSlice";
import Navbar from "../components/Navbar";
import PlansList from "../components/PlansList";
import "../styles/ProfilePage.css";
import { auth, signOut } from "../config/firebase";

const ProfilePage = () => {
	const state = useSelector(selectUser);
	const subscription = useSelector(selectSubscription);
	return (
		<div className="profilePage">
			<Navbar />
			<div className="profilePage__body">
				<h1>Edit Profile</h1>
				<hr />
				<div className="profilePage__info">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
						alt="Profile info"
						className="profilePage__avatar"
					/>
					<div className="profilePage__accountDetails">
						<h4 className="profilePage__accountDetailsEmail">{state.email}</h4>
						<h4>
							Plans{" "}
							{subscription?.name && `(Current plan: ${subscription?.name})`}
						</h4>
						<hr className="divider" />
						<PlansList />
						<button
							className="profilePage__signOutButton"
							onClick={() => signOut(auth)}>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
