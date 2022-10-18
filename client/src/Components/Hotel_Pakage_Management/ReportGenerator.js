import jsPDF from 'jspdf';
import "jspdf-autotable";


const GeneratePdf = user =>{
    
    const doc = new jsPDF();

    const tableColumn = ["ID","Category Name","Created Date"];
    const tableRows = [];

    Array.from(user).forEach(user => {
        const userData = [
                 
            user._id,
            user.name,
            user.createdAt

        
           

        ]

        tableRows.push(userData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    

    doc.autoTable(tableColumn,tableRows,{startY:20});

    doc.text("List of Category in hotel have",14,15);
    doc.text("",11,11);
   doc.getDrawColor("red");
    doc.save(`User_Report_${year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;


