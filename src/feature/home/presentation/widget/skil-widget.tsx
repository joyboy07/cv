import styled from 'styled-components'
const Skills =(params:any) => {
	var widths = params.width
	console.log(widths)
	const SpanProgresid = styled.span`
		height: 20px;
		float: left;
		background: linear-gradient(50deg, #1fe6ff, #673ab7);
		width: ${params.width};
		animation: ${params.title} 4s;
		@keyframes ${params.title}{
			0%{
				width: 0%;
			}
			100%{
				width: ${params.width};
			}
		}
	`
	return (
		<li>
			<h3>{params.title}</h3>
			<span className='bar'><SpanProgresid ></SpanProgresid></span>
		</li>
	)
}
export default Skills