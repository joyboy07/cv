import { Provider } from "react-redux";
import {
	BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import styled from "styled-components";
import Error404 from "../../app/layout/error_404";
import AboutPage from "../../feature/about/presentation/about_page";
import PortafolioPage from "../../feature/any/presentation/portafolio_page";
import ContactPage from "../../feature/contact/presentation/contact_page";
import HomeCvpdf from "../../feature/home/presentation/home_cvpdf";
import HomePage from "../../feature/home/presentation/home_page";
import ServicePage from "../../feature/portafolio/presentation/portafolio_page";
import Store from '../../general/redux/store_general';
import MenuComponet from "./menu_component";
const store = Store();

function Routers() {

	return (
		<Provider store={store}>
			<Router>
				<Reductor>
					<nav>
						<MenuComponet/>
					</nav>
					<aside>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/about" component={AboutPage} />
							<Route exact path="/service" component={ServicePage} />
							<Route exact path="/portafolio" component={PortafolioPage} />
							<Route exact path="/contact" component={ContactPage} />
							<Route exact path="/pdf" component={HomeCvpdf} />
							<Route path="/404" component={Error404} />
							<Route path="*">
								<Redirect to="/404" />
							</Route>
						</Switch>
					</aside>
					{/* <div className="xd" style={{width:'23%'}}></div> */}
				</Reductor>
			</Router>
		</Provider>
	);
}

export default Routers;

export const Reductor = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 25% 75% ;
	/* position: relative; */
	nav{
		/* background-color:#cc1 ; */
	}
	aside{
		/* background-color:#c11 ; */
	}
	@media (max-width: 600px) {
		display:block;
		/* nav{
			position: absolute;
		} */
	}
`;