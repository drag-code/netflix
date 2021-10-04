import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { selectUser } from "../features/userSlice";
import "../styles/ProfilePage.css";
import { auth, signOut } from "../config/firebase";

const ProfilePage = () => {
	const state = useSelector(selectUser);
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
						<h4>Plans (Current plan: premium)</h4>
						<hr className="divider"/>
						<p>Renewal date: 04/03/2021</p>
						<ul className="profilePage__accountDetailsPlans">
							<li className="profilePage__accountDetailsPlanItem">
								<h5>Plan Standard <br/> hello</h5>
								<button className="profilePage__subscribeButton">Subscribe</button>
							</li>
							<li className="profilePage__accountDetailsPlanItem">
								<h5>Plan Standard <br/> hello</h5>
								<button className="profilePage__subscribeButton">Subscribe</button>
							</li>
							<li className="profilePage__accountDetailsPlanItem">
								<h5>Plan Standard <br/> hello</h5>
								<button className="profilePage__subscribeButton">Subscribe</button>
							</li>
						</ul>
						<button className="profilePage__signOutButton" onClick={() => signOut(auth)}>Sign Out</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
