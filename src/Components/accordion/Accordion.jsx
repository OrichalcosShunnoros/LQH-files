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
      <h2>Historia del hapkido</h2>
      <strong>
        Teoría  de estudio para  ascenso de grado LIGA QUINDIANA DE HAPKIDO. Consta de: 
        Historia desde el creador hasta los maestros directos, además que es el Hapkido 
        parte de la filosofía y un extenso  vocabulario que te ayudará a interpretar el idioma 
        coreano (Hangul). 
      </strong>
      <br />
      <br />
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
