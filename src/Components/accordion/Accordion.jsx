import { useState, useEffect } from 'react';
import { PDFRenderer } from '../../Components/pdfrender/PdfRender';

export const Accordion = () => {
  const [files, setFiles] = useState([]);
  const [openFile, setOpenFile] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    setFiles([
        'Historia.txt', 
        'GM-Choi-Yon-Sul.txt', 
        'GM-Ji-Han-Jae.txt',
        'GM-Young-Seok-Kim.txt',
        'GM-Salvador.txt'
    ]);
  }, []);

  const toggleFile = async (file) => {
    if (openFile === file) {
      setOpenFile(null);
      return;
    }

    try {
      const response = await fetch(`/docs/${file}`);
      if (!response.ok) {
        throw new Error(`Failed to load file: ${file}`);
      }
      const text = await response.text();
      setOpenFile(file);
      setContent(text);
    } catch (error) {
      console.error(`Error load ${file}:`, error);
    }
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
          {openFile === file && <PDFRenderer name={file.replace('.txt', '')} content={content} />}
        </div>
      ))}
    </div>
  );
};
