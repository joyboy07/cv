const EducationWidget =( props:any ) => {
	return (
	<div className="education-widget">
		<div className='fromTo'>
			<h3><span></span>{props.fromTo}</h3>
		</div>
		<div className='intitute'>
			<h3 >{props.career}</h3>
			<p >{props.institute}</p>
		</div>
	</div>
	)
}
export default EducationWidget