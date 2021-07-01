import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const GoBack =() => {
	let history = useHistory();
	function goBack() {
		history.push("/cv/");
	}
	return <div style={{paddingTop:'70px', paddingBottom:'30px'}}>
		<Button variant="outlined" style={{color:'#ccc', borderColor:'#ccc', borderRadius:'0'}} onClick={goBack} > Volver </Button>
	</div>
}
export default GoBack