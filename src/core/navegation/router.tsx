import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './../../feature/home/presentation/home_page'
import Experience from './../../feature/experience/presentation/experience_page'
import Briefcase from './../../feature/briefcase/presentation/briefcase_page'
import Certificate from './../../feature/certificates/presentation/certificates_page'

function Routers() {
	return (
		<Router>
			<Switch>
				<Route exact path= "/cv/" component={Home} />
				<Route exact path= "/experience" component={Experience} />
				<Route exact path= "/briefcase" component={Briefcase} />
				<Route exact path= "/certificate" component={Certificate} />
			</Switch>
		</Router>
	);
}

export default Routers;