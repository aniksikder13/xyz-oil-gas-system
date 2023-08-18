import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generatePDF = (data) => {
    const doc = new jsPDF();
    const header = ['Project Name', 'Client', 'Contractor', 'Project Description', 'Max X', 'Min X', 'Max Y', 'Min Y', 'Max Z', 'Min Z']; 
    const rows = data.map(item => [item.projectName, item.client, item.contractor, item.projectDescription, item.max_x, item.min_x, item.max_y, item.min_y, item.max_z, item.min_z]);

    doc.autoTable({
      head: [header],
      body: rows,
    });

    doc.save('document.pdf');
  };
