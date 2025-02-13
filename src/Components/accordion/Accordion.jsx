import { PDFRenderer } from '../pdfrender/PdfRender';
import { useState, useEffect } from 'react';

export const Accordion = () => {
  const [files, setFiles] = useState([]);
  const [openFile, setOpenFile] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/files");
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Files received:", data);
        setFiles(data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
  
    fetchFiles();
  }, []);

  const fetchFileContent = async (file) => {
    try {
      const response = await fetch(`http://localhost:3000/api/file/${file}`);

      if (!response.ok) {
        throw new Error(`Failed to load file: ${file}`);
      }
      return await response.text();
    } catch (error) {
      console.error(`Error loading ${file}:`, error);
      return '';
    }
  };

  const toggleFile = async (file) => {
    if (openFile === file) {
      setOpenFile(null);
      return;
    }

    const text = await fetchFileContent(file);
    setOpenFile(file);
    setContent(text);
  };

  return (
    <div>
      {files.map((file) => (
        <div key={file} style={{ marginBottom: '10px', borderRadius: '5px' }}>
          <button
            onClick={() => toggleFile(file)}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '10px',
              fontSize: '16px',
              backgroundColor: openFile === file ? '#aaa' : '#ddd',
              cursor: 'pointer',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            {file.replace('.txt', '')}
          </button>
          {openFile === file && (
            <PDFRenderer name={file.replace(/\.(txt|json)$/, '')} content={content} />
          )}
        </div>
      ))}
    </div>
  );
};
