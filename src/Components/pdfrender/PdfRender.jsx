import { PDFGenerator } from '../pdfGenerator/PDFGenerator';
import youngSeokKim from '../../assets/young-seok-kim.png';
import jiHanJae from '../../assets/Ji-Han-Jae.webp';
import historia from '../../assets/historia.webp';
import salvador from '../../assets/salvador.png';
import { PDFViewer } from '@react-pdf/renderer';
import choi from '../../assets/choi.webp';
import PropTypes from 'prop-types';

const imageMap = {
  'Historia': historia,
  'GM-Choi-Yon-Sul': choi,
  'GM-Ji-Han-Jae': jiHanJae,
  'GM-Young-Seok-Kim': youngSeokKim,
  'GM-Salvador': salvador,
};

export const PDFRenderer = ({ name, content }) => {
  const imageSrc = imageMap[name] || '';

  return (
    <div
      style={{
        padding: '0 .5rem',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',

        border: 'none',
        backgroundColor: '#333',
      }}
    >
      {imageSrc && <img src={imageSrc} alt={name} width="20%" />}
      <PDFViewer width="100%" height="500px">
        <PDFGenerator title={name} content={content} />
      </PDFViewer>
    </div>
  );
};

PDFRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
