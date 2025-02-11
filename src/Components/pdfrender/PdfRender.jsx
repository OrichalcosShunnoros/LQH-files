import PropTypes from 'prop-types';
import { PDFViewer } from '@react-pdf/renderer';
import { PDFGenerator } from '../pdfGenerator/PDFGenerator';
import historia from '../../assets/historia.webp';
import choi from '../../assets/choi.webp';
import jiHanJae from '../../assets/Ji-Han-Jae.webp';
import youngSeokKim from '../../assets/young-seok-kim.png';
import salvador from '../../assets/salvador.png';

const imageMap = {
  Historia: historia,
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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        backgroundColor: '#333',
        border: 'none',
        justifyContent: 'space-between',
        padding: '0 .5rem',
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
