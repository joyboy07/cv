import '../style/home_profiles.css'
import bottomR  from '../../../../assets/img/bottonR.png'
import ProfileWitget  from '../widget/profile'

const profiles = () =>{
	return (
		<div className = 'profiles'>
			<ProfileWitget name= 'Cristian García ' country='Mexico' route='Profile' image = {bottomR} />
			<ProfileWitget name= 'Julio Porlles Pardo ' country='Peru' route='profile' image = {bottomR}/>
		</div>
	)
}
export default profiles
