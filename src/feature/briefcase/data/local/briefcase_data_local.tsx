import IBriefcase from '../../entities/briefcase_entity';

class BriefcaseDataLocal{

	getCertificagtes(){
		let product:IBriefcase[] = [
			{id:1, name:'Mission - Freelancer',years:'Marzo 2020 - Abril 2020',description:'Desarrollo de aplicación de boletas y comunicaciones.',tenologies:['Framework Flutter','Lenguaje dart'] ,url:'dsd'},
			{id:2, name:'Reportes Humanidad - Freelancer',years:'Marzo 2020 - junio 2020',description:'Desarrollo de aplicación que calcula el monto total S/, los pedidos y atenciones según las especialidades seleccionadas también por un tipo de fecha días, mes, rango.',tenologies:['Framework Flutter','Lenguaje dart'], url:''},
			{id:3, name:'Thynda - Frelancer',years:'julio 2020 - Noviembre 2020',description:'Mantenimiento de funcionalidad interna, como carrito de compras, productos, transferencias también se implementó una toma de inventario y actualización de precio y descuentos.',tenologies:['Framework Flutter','Lenguaje dart'], url:''},
			{id:4, name:'Control de personal',years:'Noviembre 2020 - Diciembre 2020',description:'Aplicacion web para el control de personal con menú dinámico, creación de CRUD y filtrados; se utilizó con Angular, nestJs y sqlserver.',tenologies:['Framework Angular','Typescript','HTML','Sass', 'Material Angular', 'Boostrap',], url:''},
			{id:5, name:'Tu rutas - Flutter',years:'Febrero 2021 - junio 2021',description:'Implementación de flujo de viajes interprovinciales.',tenologies:['Framework Flutter','Lenguaje dart','Google maps','Firebase'], url:''},
			{id:6, name:'Lutbox - Personal',years:'Marzo 2021 - Abril 2021',description:'Juego educativo para practicar palabras en ingles.',tenologies:['Framework Flutter','Lenguaje dart'], url:'https://play.google.com/store/apps/details?id=com.lutbox.lutbox'},
			{id:7, name:'PecSalud - Flutter',years:'Abril 2021 - actualidad',description:'Aplicativo E-ecommerce.',tenologies:['Framework Flutter','Lenguaje dart'], url:''},
		];
		return product
	}
}
export default BriefcaseDataLocal