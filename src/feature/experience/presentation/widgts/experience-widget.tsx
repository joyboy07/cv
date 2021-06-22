import { Button } from "@material-ui/core"

const ExperienceWidget =(params:any) => {
	return (
		<div className='experiencesWidget'>
			<div className ='item-title'>
				<h1>{params.name}</h1>
				<h3>{'Cargo: '+params.cargo}</h3>
			</div>
			<div className='description'>
				<p >{'RUC: '+params.ruc}</p>
				<p >{params.years}</p>
				<Button>
					<a href={params.url} target="_blank" rel = "noreferrer">
						Ver
					</a>
				</Button>
			</div>
		</div>
	)
}
export default ExperienceWidget