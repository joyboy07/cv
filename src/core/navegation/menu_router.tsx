import styled from "styled-components";
import { colorBackgroud } from "../theme/color";



//!!!!no tokar fake
function MenuRouter() {
	return (
		<>
			<Reductor>
				<div>
					{/* <MenuComponet></MenuComponet> */}
				</div>
				<div>
					{/* <Switch>
						<Route exact path="/home" component={HomePage} />
						<Redirect from='/' to='/home' />
					</Switch> */}
				</div>
			</Reductor>
		</>
	);
}

export default MenuRouter;

export const Reductor = styled.div`
	width: 100%;
	height: 100vh;
	background-color: ${colorBackgroud} ;
	display:flex;
	div:nth-child(1){
		width:30% ;
	}
	div:nth-child(2){
		width: 70%;
	}
`;
