import Iexperience from '../../entities/experience_entity';

class ExperienceDataLocal{

	getCertificagtes(){
		let product:Iexperience[] = [
			{id:1,name:'Mecánica automotriz jorge chumpitaz', ruc:'101573083331',years:'01 mayo de 2020 hasta 30 de agosto del 2020', cargo:'Desarrollador',url:'https://drive.google.com/file/d/1f8ivKI4Yj7zKk6fDEC4Lw29_pUaZaB1K/view?usp=sharing'},
			{id:1,name:'HOSTDOG', ruc:'10410967125', years:'01 de setiembre del 2020 hasta 31 de mayo del 2021', cargo:'Desarrollador',url:'https://drive.google.com/file/d/1V_RhD22j0RcYayk5JbXVzqTcIRQHsA8w/view?usp=sharing'}
		];
		return product
	}
}
export default ExperienceDataLocal