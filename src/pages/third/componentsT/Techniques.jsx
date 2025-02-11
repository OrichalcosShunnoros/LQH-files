import { useState, useEffect } from 'react';
import { PDFRenderer } from '../../../Components/pdfrender/PdfRender';

export const Techniques = () => {
  const [files, setFiles] = useState([]);
  const [openFile, setOpenFile] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    setFiles([
      '(Blanco - Amarillo - Naranja) Llaves mano igual 1 - 46.txt',
      '(Verde) Puño contra puño.txt',
      '(Verde) Agarres por la espalda.txt',
      '(Azul) Patada contra puño.txt',
      '(Azul) Abrazos.txt',
      '(Purpura) Sentado.txt',
      '(Rojo) Agarres a dos manos.txt',
      '(Rojo-Marrón) Saludo y conducción (Kyonye Sul).txt',
      '(Rojo-Marrón) LLave contra puño (Ko Ki Sul Bang Kwong Sul).txt',
      '(Marrón) Defensa contra agrres de Judo (Judo Chapki Sul).txt'
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
        Técnicas de defensa personal (Ho Sin Sul)
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
