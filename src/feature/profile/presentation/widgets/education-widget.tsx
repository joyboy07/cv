const EducationWidget =( props:any ) => {
	return (
	<div className="education-widget">
		<div className="indice"/>
		<div className='fromTo'>
			<h3>{props.fromTo}</h3>
		</div>
		<div className='intitute'>
			<h3 >{props.institute}</h3>
			<h4 >{props.career}</h4>
		</div>
	</div>
	)
}
export default EducationWidget