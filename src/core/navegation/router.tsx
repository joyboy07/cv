import { useEffect } from "react";
import { Provider } from "react-redux";
import {
	BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import styled from "styled-components";
import Error404 from "../../app/layout/error_404";
import AboutPage from "../../feature/about/presentation/about_page";
import PortafolioPage from "../../feature/any/presentation/portafolio_page";
import ContactPage from "../../feature/contact/presentation/contact_page";
import HomeCvpdf from "../../feature/home/presentation/home_cvpdf";
import HomePage from "../../feature/home/presentation/home_page";
import HomeLayout from "../../feature/home/presentation/layout/home_layout";
import ServicePage from "../../feature/portafolio/presentation/portafolio_page";
import Store from '../../general/redux/store_general';
const store = Store();

function Routers() {
	useEffect(() => {
	}, [])
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/" element={<HomePage/>} >
						<Route path="home" element={<HomeLayout/>} />
						<Route path="about" element={<AboutPage/>} />
						<Route path="service" element={<ServicePage/>} />
						<Route path="portafolio" element={<PortafolioPage/>} />
						<Route path="contact" element={<ContactPage/>} />
					</Route>
					<Route path="pdf" element={<HomeCvpdf/>} />
					<Route path="*" element={<Error404/>} />
				</Routes>
			</Router>
		</Provider>
	);
}

export default Routers;

export const Reductor = styled.div`
	width: 100%;
	height: 100vh;
	background-color:#cc1 ;
	/* @media (max-width: 600px) {
		display:block;
	} */
`;