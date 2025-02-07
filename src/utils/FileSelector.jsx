import { useState, useEffect } from 'react';
import { PDFRenderer } from '../Components/pdfrender/PdfRender';

export const FileSelector = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    // Simula archivos en src/docs/ (esto solo es para mostrar la UI, no lista archivos reales)
    setFiles(['historia1.txt']);
  }, []);

  const handleFileSelect = async (file) => {
    try {
      const response = await fetch(`/docs/${file}`);
      const text = await response.text();
      setSelectedFile(file);
      setContent(text);
    } catch (error) {
      console.error(`Error cargando ${file}:`, error);
    }
  };

  return (
    <div>
      <h2>Selecciona un Archivo</h2>
      {files.map((file) => (
        <button key={file} onClick={() => handleFileSelect(file)} style={{ margin: '5px' }}>
          {file.replace('.txt', '')}
        </button>
      ))}
      {selectedFile && <PDFRenderer name={selectedFile.replace('.txt', '')} content={content} />}
    </div>
  );
};

