import { Document, Image, Page, Text, View } from "@react-pdf/renderer";


function DocuPdf({ poema }:any) {
	const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
	return (
		<Document

		>
		<Page
			size="A4"
			style={{
			display: "flex",
			backgroundColor: "white",
			padding:20
			}}
		>
			<View
				style={{
					display: "flex",
					flexDirection:'row',
					height:'10vh',
					width:'100%' ,
					backgroundColor:"white"
				}}
			>
				<View style={{ width:'50%', height:'100%', display: "flex", flexDirection:'column', justifyContent:'space-around' }}>
					<Text style={{ fontSize: "20px" }}>Julio</Text>
					<Text style={{ fontSize: "20px" }}>Porlles Pardo</Text>
					<Text style={{ fontSize: "15px", color:'#0F6BAC' }}>Bachiller en informatica</Text>
				</View>
				<View style={{ width:'50%', height:'100%', display: "flex", flexDirection:'column', justifyContent:'space-around' }}>
					<View style={{display: "flex", flexDirection:'row', alignItems:'center', justifyContent:'flex-end',}} >
						<Text style={{ fontSize: "12px", color:'#0F6BAC' }}>julio.porlles.pardo@gmail.com</Text>
						<View style={{width:'10px'}}></View>
						<Image src="https://cdn-icons-png.flaticon.com/512/888/888853.png?w=360" style={{ maxWidth: "20px", maxHeight: "20px" }}/>
					</View>
					<View style={{display: "flex", flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}} >
						<Text style={{ fontSize: "12px", color:'#0F6BAC' }}>+51 970578887</Text>
						<View style={{width:'10px'}}></View>
						<Image src="https://cdn.pixabay.com/photo/2021/05/24/17/07/whatsapp-6279868_1280.png" style={{ maxWidth: "30px", maxHeight: "30px" }}/>
					</View>
					<View style={{display: "flex", flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}} >
						<Text style={{ fontSize: "12px", color:'#0F6BAC' }}>https://www.linkedin.com/in/julio-porlles-pardo/</Text>
						<View style={{width:'10px'}}></View>
						<Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style={{ maxWidth: "20px", maxHeight: "20px" }}/>
					</View>
				</View>
			</View>
			<View style={{ height:'10px' }}></View>
			<Text style={{ fontSize: "9px", textAlign:'justify' }}>
				Egresado de Ingeniería Informática de la Universidad Nacional José Faustino Sánchez Carrión (UNJFSC), siendo parte del tercio superior ocupando los primeros puestos. Experiencia trabajando en y formando equipos de trabajo para desarrollo de software y soluciones de análisis de datos e inteligencia de negocios . Ex-miembro líder de la Comunidad Estudiantil UNJFSC y del Project Management Institute Global y PMI Lima Perú Chapter, organización líder dedicada a estudiar, enseñar y aplicar las buenas prácticas en Dirección de Proyectos. Proactivo, dinámico y orientado al cumplimiento de objetivos.
			</Text>
			<View style={{ height:'10px' }}></View>

			<View style={{display: "flex",flexDirection:'row'}}>
				<View style={{ width:'48%' }}>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							EXPERIENCIA LABORAL
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
						<View style={{ width:'100%'}}>
							<Text style={{ fontSize: "9px", textAlign:'justify' }}>
								names
							</Text>
						</View>

					</View>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							PORTAFOLIO
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
						<View style={{ width:'100%'}}>
							<Text style={{ fontSize: "9px", textAlign:'justify' }}>
								names
							</Text>
						</View>

					</View>
				</View>
				<View style={{ width:'4%' }}>

				</View>
				<View style={{ width:'48%' }}>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							EDUCACION
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
					</View>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							CERTIFICADOS
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
					</View>
				</View>
			</View>
		</Page>
		</Document>
	);
}

export default DocuPdf