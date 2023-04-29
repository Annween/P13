
import Header from "./components/Header";
import Home from "./pages/home/home";
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Profile from "./pages/profile/profile";
import Signout from "./pages/signout/signout";
import Footer from "./components/Footer";
import {Provider} from "react-redux";
import store from "./services/store";


function Router() {
	return <Provider store={store}>
	<BrowserRouter>
		<Header/>
		<Routes>
			<Route  path="/" element={<Home/>}/>
			<Route  path="/signin" element={<Signin/>}/>
			<Route  path="/profile" element={<Profile/>}/>
			<Route  path="/signout" element={<Signout/>}/>

		</Routes>
	<Footer/>
	</BrowserRouter>
	</Provider>
}

export default Router;
