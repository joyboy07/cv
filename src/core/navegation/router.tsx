import {
	BrowserRouter as Router, Redirect, Route, Switch
} from "react-router-dom";
import Error404 from "../../app/layout/error_404";
import MenuRouter from "./menu_router";
function Routers() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={MenuRouter} />
				{/* <Route path="/panel" component={RouterHome} /> */}
				<Route path="/404" component={Error404} />
				<Route path="*">
					<Redirect to="/404" />
				</Route>

				{/* <Route exact path="/" component={Home} />
				<Route path= "/experience" component={Experience} />
				<Route path= "/briefcase" component={Briefcase} />
				<Route path= "/certificate" component={Certificate} />
				<Route path= "/cvPdf" component={HomeCvpdf} />
				<Route path="*">
					<Redirect to="/404" />
				</Route> */}
			</Switch>
		</Router>
	);
}

export default Routers;