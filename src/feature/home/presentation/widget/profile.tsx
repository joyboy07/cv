import '../style/home_profiles.css'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const ProfileComponets = ( props:any ) =>{
	let history = useHistory();

	function handleClick() {
		history.push(props.route);
	}
	return (
	<div className ='child-profile' >
		<img className='img-circular' src= {props.image} style={{ background: 'orange', height: '200px', width: '200px'}} alt=''/>
		<p style={{fontSize:'25px', color:'white', paddingTop:'15px', paddingBottom:'10px'}}>{props.name}</p>
		<p style={{fontSize:'15px', color:'white', paddingBottom:'10px'}}>{props.country}</p>
		<Button variant="outlined" style={{color:'White', borderColor:'white'}} onClick={handleClick} > Ábreme </Button>
	</div>
	)
}
export default ProfileComponets
