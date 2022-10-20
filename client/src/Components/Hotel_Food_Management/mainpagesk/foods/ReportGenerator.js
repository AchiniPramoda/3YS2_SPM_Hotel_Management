import jsPDF from 'jspdf';
import "jspdf-autotable";


const GeneratePdf = pdf =>{
    
    const doc = new jsPDF();

    const tableColumn = ["Title","Description","Price","CreatedAt"];
    const tableRows = [];

    Array.from(pdf).forEach(pdf => {
        const pdfData = [
            pdf.title, 
            pdf.description,
            pdf.price,
            pdf.createdAt

        
           

        ]

        tableRows.push(pdfData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    

    doc.autoTable(tableColumn,tableRows,{startY:20});

    doc.text("All Foods Details",14,15);
    doc.text("",11,11);
   doc.getDrawColor("black");
    doc.save(`pdf_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;
