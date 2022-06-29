import { PDFViewer } from '@react-pdf/renderer'
import DocuPdf from './components/docu_pdf'

function HomeCvpdf() {
  return (
	<PDFViewer style={{ width: "100%", height: "100vh" }}>
		
		<DocuPdf  />
	</PDFViewer>
  )
}

export default HomeCvpdf