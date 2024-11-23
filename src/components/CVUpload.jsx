import React, { useState } from 'react';
import { Upload, FileText, Check, AlertCircle } from 'lucide-react';
import Swal from 'sweetalert2';

const CVUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  const checkATSCompliance = (file) => {
    // Simulasi pengecekan ATS - dalam implementasi nyata, 
    // ini bisa menggunakan API atau library parsing dokumen
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockFeedback = {
          isCompliant: true,
          suggestions: [
            "✓ Format dokumen didukung",
            "✓ Ukuran file optimal",
            "Saran: Pastikan menggunakan font standar seperti Arial atau Calibri",
            "Saran: Hindari penggunaan tabel dan grafik kompleks"
          ]
        };
        resolve(mockFeedback);
      }, 1500);
    });
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    
    if (!selectedFile) return;

    if (!allowedTypes.includes(selectedFile.type)) {
      Swal.fire({
        icon: 'error',
        title: 'Format Tidak Didukung',
        text: 'Mohon upload file dalam format PDF atau DOC/DOCX',
      });
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
      Swal.fire({
        icon: 'error',
        title: 'File Terlalu Besar',
        text: 'Ukuran file maksimal adalah 5MB',
      });
      return;
    }

    setFile(selectedFile);
    setLoading(true);

    try {
      const atsFeedback = await checkATSCompliance(selectedFile);
      setFeedback(atsFeedback);
      
      if (atsFeedback.isCompliant) {
        Swal.fire({
          icon: 'success',
          title: 'CV Berhasil Diupload',
          text: 'CV Anda sudah ATS-friendly!',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Terjadi Kesalahan',
        text: 'Gagal menganalisis CV. Silakan coba lagi.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload CV</h2>
      
      <div className="mb-6">
        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
          <input
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".pdf,.doc,.docx"
          />
          <div className="flex flex-col items-center">
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">
              {file ? file.name : 'Drag & drop CV Anda atau klik untuk memilih file'}
            </p>
            <p className="text-sm text-gray-500">
              Mendukung PDF, DOC, atau DOCX (Max. 5MB)
            </p>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent"></div>
          <span>Menganalisis CV...</span>
        </div>
      )}

      {feedback && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Hasil Analisis ATS
          </h3>
          <ul className="space-y-2">
            {feedback.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start text-sm">
                {suggestion.startsWith("✓") ? (
                  <Check className="w-4 h-4 mr-2 text-green-500 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 mr-2 text-yellow-500 mt-0.5" />
                )}
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CVUpload;