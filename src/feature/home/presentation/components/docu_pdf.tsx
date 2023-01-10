import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import experienceWordI from "../../../../general/interface/experience_word_inteface";
import certificateI from "../../../about/interface/certificate_interface";
import IEducation from "../../../about/interface/education_Interface";
import portafolioI from "../../../portafolio/entities/portafolio_Interface";


function DocuPdf(poema:any) {
	return (
		<Document>
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
						<Image src="https://cdn-icons-png.flaticon.com/512/888/888853.png?w=360" style={{ maxWidth: "10px", maxHeight: "10px" }}/>
					</View>
					<View style={{display: "flex", flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}} >
						<Text style={{ fontSize: "12px", color:'#0F6BAC' }}>+51 970578887</Text>
						<View style={{width:'10px'}}></View>
						<Image src="https://cdn-icons-png.flaticon.com/512/3616/3616453.png" style={{ maxWidth: "10px", maxHeight: "10px" }}/>
					</View>
					<View style={{display: "flex", flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}} >
						<Text style={{ fontSize: "12px", color:'#0F6BAC' }}>https://www.linkedin.com/in/julio-porlles-pardo/</Text>
						<View style={{width:'10px'}}></View>
						<Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style={{ maxWidth: "10px", maxHeight: "10px" }}/>
					</View>
				</View>
			</View>
			<View style={{ height:'10px' }}></View>
			<Text style={{ fontSize: "9px", textAlign:'justify' }}>
				Egresado de Ingeniería Informática de la Universidad Nacional José Faustino Sánchez Carrión (UNJFSC). Experiencia desarrollo de software. Ex-miembro de la Comunidad Estudiantil UNJFSC y del Project Management Institute Global y PMI Lima Perú Chapter, organización líder dedicada a estudiar, enseñar y aplicar las buenas prácticas en Dirección de Proyectos. Proactivo, dinámico y orientado al cumplimiento de objetivos.
			</Text>
			<View style={{ height:'10px' }}></View>
			<View style={{ display: "flex", flexDirection:'row',}}>
				<View style={{ border:'1px solid #0F6BAC', borderRadius:'50%', width:'40px', height:'40px', display: "flex", justifyContent:'center', alignItems:'center' }}>
						<Image src="https://hsto.org/getpro/habr/post_images/d11/98b/ac8/d1198bac8e4ced0d89d5e5983061f418.png" style={{ maxWidth: "30px", maxHeight: "30px" }}/>
					{/* <Text  style={{ fontSize: "9px", color:'#fff' }}>NestJS</Text> */}
				</View>
				<View  style={{ width:'10px' }} ></View>
				<View style={{ border:'1px solid #0F6BAC', borderRadius:'50%', width:'40px', height:'40px', display: "flex", justifyContent:'center', alignItems:'center' }}>
						<Image src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" style={{ maxWidth: "30px", maxHeight: "30px" }}/>
					{/* <Text  style={{ fontSize: "9px", color:'#fff' }}>ReactJS</Text> */}
				</View>
				<View  style={{ width:'10px' }} ></View>
				<View style={{ border:'1px solid #0F6BAC', borderRadius:'50%', width:'40px', height:'40px', display: "flex", justifyContent:'center', alignItems:'center' }}>
						{/* <Image src="https://damiandeluca.com.ar/wp-content/uploads/2020/01/flutter-logo.jpg" style={{ maxWidth: "30px", maxHeight: "30px" }}/> */}
					<Text  style={{ fontSize: "9px", color:'#0F6BAC' }}>Flutter</Text>
				</View>
				<View  style={{ width:'10px' }} ></View>
				<View style={{ border:'1px solid #0F6BAC', borderRadius:'50%', width:'40px', height:'40px', display: "flex", justifyContent:'center', alignItems:'center' }}>
						<Image src="https://cdn-icons-png.flaticon.com/512/5969/5969282.png" style={{ maxWidth: "30px", maxHeight: "30px" }}/>
					{/* <Text  style={{ fontSize: "9px", color:'#fff' }}>Ubuntu</Text> */}
				</View>
				<View  style={{ width:'10px' }} ></View>
				<View style={{ border:'1px solid #0F6BAC', borderRadius:'50%', width:'40px', height:'40px', display: "flex", justifyContent:'center', alignItems:'center' }}>
						{/* <Image src="./../../../../assets/eye-solid.svg" style={{ maxWidth: "30px", maxHeight: "30px" }}/> */}
					<Text  style={{ fontSize: "9px", color:'#0F6BAC' }}>PostgreSQL</Text>
				</View>
				<View  style={{ width:'10px' }} ></View>
				<View style={{ border:'1px solid #0F6BAC', borderRadius:'50%', width:'40px', height:'40px', display: "flex", justifyContent:'center', alignItems:'center' }}>
						<Image src="https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png" style={{ maxWidth: "30px", maxHeight: "30px" }}/>
					{/* <Text  style={{ fontSize: "9px", color:'#fff' }}>Firebase</Text> */}
				</View>
			</View>
			<View style={{ height:'20px' }}></View>

			<View style={{display: "flex",flexDirection:'row'}}>
				<View style={{ width:'48%' }}>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							EXPERIENCIA LABORAL
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
						<View style={{ width:'100%', paddingHorizontal:'10px'}}>
							{
								poema.experienceWordIs.map((item:experienceWordI) => (
									<View key={item.id} style={{ width:'100%', paddingVertical:'10px'}}>
										<Text  style={{ fontSize: "15px"}} >{ item.cargo }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "9px", color:'#0F6BAC'}} >{ item.data }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "9px"}} >{ item.empresa}</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "12px"}} >{ item.descripcion}</Text>
									</View>
								))
							}
						</View>

					</View>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							PORTAFOLIO
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
						<View style={{ width:'100%', paddingHorizontal:'10px'}}>
							{
								poema.portafolios.map((item:portafolioI) => (
									<View key={item.id} style={{ width:'100%', paddingVertical:'10px'}}>
										<Text  style={{ fontSize: "15px"}} >{ item.title }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "9px", color:'#0F6BAC'}} >{ item.date }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "9px"}} >{ item.tecnologies}</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "12px", fontWeight:'light'}} >{ item.detail}</Text>
									</View>
								))
							}
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
						<View style={{ width:'100%', paddingHorizontal:'10px'}}>
							{
								poema.education.map((item:IEducation) => (
									<View key={item.id} style={{ width:'100%', paddingVertical:'10px'}}>
										<Text  style={{ fontSize: "15px"}} >{ item.name }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "9px", color:'#0F6BAC'}} >{ item.date }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "12px"}} >{ item.institucion }</Text>
									</View>
								))
							}
						</View>
					</View>
					<View style={{ width:'100%' }}>
						<Text style={{ fontSize: "15px", textAlign:'justify', color:'#0F6BAC'}}>
							CERTIFICADOS
						</Text>
						<View style={{ width:'100%', height:'1px', backgroundColor:'#0F6BAC'}}></View>
						<View style={{ width:'100%', paddingHorizontal:'10px'}}>
							{
								poema.certificaties.map((item:certificateI) => (
									<View key={item.id} style={{ width:'100%', paddingVertical:'10px'}}>
										<Text  style={{ fontSize: "15px"}} >{ item.name }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "9px", color:'#0F6BAC'}} >{ item.dateStar }</Text>
										<View style={{ height:'2px' }}></View>
										<Text style={{ fontSize: "12px"}} >{ item.organization }</Text>
									</View>
								))
							}
						</View>
					</View>
				</View>
			</View>
		</Page>
		</Document>
	);
}

export default DocuPdf