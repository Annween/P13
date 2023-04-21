
import Header from "./components/Header";
import Home from "./pages/home/home";
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Footer from "./components/Footer";


function Router() {
	return <BrowserRouter>
		<Header/>
		<Routes>
			<Route  path="/" element={<Home/>}/>
			<Route  path="/signin" element={<Signin/>}/>
		</Routes>
	<Footer/>
	</BrowserRouter>
}

export default Router;
