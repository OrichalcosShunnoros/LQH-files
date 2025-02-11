import { useState, useEffect } from 'react';
import { PDFRenderer } from '../../../Components/pdfrender/PdfRender';

export const FiguresWithOutWeapons = () => {
  const [files, setFiles] = useState([]);
  const [openFile, setOpenFile] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    setFiles([
      'Joong Do Il Dan.txt',
      'Joong Do I Dan.txt',
      'Joong Do Sam Dan.txt',
      'Joong Do Sa Dan.txt',
      'Joong Do O Dan.txt',
      'Won Il Dan.txt',
      'Won I Dan.txt',
      'Won Sam Dan.txt',
      'Won Sa Dan.txt',
      'Won O Dan.txt',
      'Ki Hap.txt',
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
      console.error(`Error loading ${file}:`, error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', textShadow: 'none', color: '#ccc' }}>
        Figures Without Weapons
      </h1>
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
