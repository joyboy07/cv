import IBriefcase from "../../entities/briefcase_entity"

const ExperienceWidget =(params:any) => {
	let  pr:IBriefcase = params.prams
	return (
		<div>
			<div className ='item-title'>
				<h1>{pr.name}</h1>
				<h3>{pr.years}</h3>
			</div>
			<div className ='technologies'>
			{
				pr.tenologies?.map((tecnologie, index)=>{
					return(
						<h6 key={index}>{tecnologie}</h6>
					)
				},this)
			}
			{
				pr.url === ''?<div/> : <div className='btn' ><a href={pr.url} target="_blank" rel = "noreferrer">Ver</a></div>
			}
			</div>
			<div className='description'>
				<p >{pr.description}</p>
			</div>
		</div>
	)
}
export default ExperienceWidget