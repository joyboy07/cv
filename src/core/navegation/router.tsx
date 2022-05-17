import {
	BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import styled from "styled-components";
import Error404 from "../../app/layout/error_404";
import AboutPage from "../../feature/about/presentation/about_page";
import ContactPage from "../../feature/contact/presentation/contact_page";
import HomePage from "../../feature/home/presentation/home_page";
import PortafolioPage from "../../feature/portafolio/presentation/portafolio_page";
import ServicePage from "../../feature/service/presentation/service_page";
import { colorBackgroud } from "../theme/color";
import MenuComponet from "./menu_component";
function Routers() {
	return (
		<Router>
			<Reductor>
				<MenuComponet></MenuComponet>
				<div style={{width:'23%'}}></div>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/service" component={ServicePage} />
					<Route exact path="/portafolio" component={PortafolioPage} />
					<Route exact path="/contact" component={ContactPage} />
					<Route path="/404" component={Error404} />
					<Route path="*">
						<Redirect to="/404" />
					</Route>
				</Switch>
			</Reductor>
		</Router>
	);
}

export default Routers;

export const Reductor = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${colorBackgroud} ;
	display:flex;
`;