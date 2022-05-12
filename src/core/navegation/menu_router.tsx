import {
	Redirect, Route, Switch
} from "react-router-dom";
import styled from "styled-components";
import HomePage from "../../feature/home/presentation/home_page";
import { colorBackgroud } from "../theme/color";
import MenuComponet from "./menu_component";




function MenuRouter() {
	return (
		<>
			<Reductor>
				<MenuComponet></MenuComponet>
				<Switch>
					<Route exact path="/panel/home" component={HomePage} />
					{/* <Route exact path="/panel/audiencias" component={AudiencePage} />
					<Route exact path="/panel/user" component={UserPage} />
					<Route exact path="/panel/report" component={ReportPage} />
					<Route exact path="/panel/mis-aduiencias" component={MyAudiencePage} />
					<Route exact path="/panel/mi-profile" component={MyProfilePage} /> */}
					<Redirect from='/panel' to='/panel/home' />
				</Switch>
			</Reductor>
		</>
	);
}

export default MenuRouter;

export const Reductor = styled.div`
	width: 100%;
	height: 100vh;
	margin: auto;
	background-color: ${colorBackgroud} ;
`;
