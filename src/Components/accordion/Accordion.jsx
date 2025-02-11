import { useState, useEffect } from 'react';
import { PDFRenderer } from '../pdfrender/PdfRender';

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
      'GM-Salvador.txt',
    ]);
  }, []);

  const fetchFileContent = async (file) => {
    try {
      const response = await fetch(`/docs/${file}`);
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
            <PDFRenderer name={file.replace('.txt', '')} content={content} />
          )}
        </div>
      ))}
    </div>
  );
};
