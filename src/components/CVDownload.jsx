import React from 'react';
import { Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const CVDownload = ({ userData }) => {
  const { isAuthenticated } = useAuth();

  // Fungsi untuk memformat data menjadi format ATS-friendly
  const formatCVContent = () => {
    const content = [];

    // Informasi Pribadi
    content.push('CURRICULUM VITAE\n');
    content.push(`${userData.name || 'Rizal'}`);
    content.push(`${userData.title || 'Full Stack Developer'}`);
    content.push(`${userData.email || 'email@example.com'}`);
    content.push(`${userData.phone || '+62 xxx-xxxx-xxxx'}`);
    content.push(`${userData.location || 'Indonesia'}\n\n`);

    // Ringkasan Profesional
    content.push('RINGKASAN PROFESIONAL\n');
    content.push(`${userData.summary || 'Full Stack Developer dengan pengalaman dalam pengembangan aplikasi web menggunakan React dan Node.js.'}\n\n`);

    // Pengalaman Kerja
    content.push('PENGALAMAN KERJA\n');
    if (userData.experience && userData.experience.length > 0) {
      userData.experience.forEach(exp => {
        content.push(`${exp.title} | ${exp.company}`);
        content.push(`${exp.startDate} - ${exp.endDate}`);
        content.push(`${exp.description}\n`);
      });
    }
    content.push('\n');

    // Pendidikan
    content.push('PENDIDIKAN\n');
    if (userData.education && userData.education.length > 0) {
      userData.education.forEach(edu => {
        content.push(`${edu.degree} - ${edu.school}`);
        content.push(`${edu.graduationYear}`);
        content.push(`${edu.description || ''}\n`);
      });
    }
    content.push('\n');

    // Keahlian
    content.push('KEAHLIAN\n');
    if (userData.skills && userData.skills.length > 0) {
      userData.skills.forEach(skill => {
        content.push(`• ${skill.name} - ${skill.level}`);
      });
    }
    content.push('\n\n');

    // Proyek
    content.push('PROYEK\n');
    if (userData.projects && userData.projects.length > 0) {
      userData.projects.forEach(project => {
        content.push(`${project.name}`);
        content.push(`${project.description}`);
        content.push(`Teknologi: ${project.technologies}\n`);
      });
    }

    return content.join('\n');
  };

  // Fungsi untuk mengunduh CV
  const downloadCV = () => {
    const content = formatCVContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_ATS.txt'; // Format .txt untuk memastikan ATS-friendly
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Fungsi untuk mengunduh CV dalam format PDF
  const downloadPDF = () => {
    const content = formatCVContent();
    // Menggunakan window.print() untuk mengunduh sebagai PDF
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>CV</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(`
      body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
      h1, h2 { color: #2563eb; }
      .section { margin-bottom: 20px; }
      .item { margin-bottom: 10px; }
    `);
    printWindow.document.write('</style></head><body>');
    printWindow.document.write(content.replace(/\n/g, '<br>'));
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Unduh CV</h3>
      
      <div className="flex gap-4">
        <button
          onClick={downloadCV}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <Download className="w-5 h-5" />
          Unduh CV (Format ATS)
        </button>

        <button
          onClick={downloadPDF}
          className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          <Download className="w-5 h-5" />
          Unduh CV (PDF)
        </button>
      </div>

      <div className="text-sm text-gray-600 mt-2">
        <p>* Format ATS adalah format yang mudah dibaca oleh sistem Applicant Tracking System</p>
        <p>* Format PDF untuk tampilan yang lebih menarik secara visual</p>
      </div>
    </div>
  );
};

export default CVDownload;