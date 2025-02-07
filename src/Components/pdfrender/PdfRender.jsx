import PropTypes from 'prop-types';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import historia from '../../assets/historia.webp';
import choi from '../../assets/choi.webp';
import Ji from '../../assets/Ji-Han-Jae.webp';
import kim from '../../assets/young-seok-kim.png';
import salvador from '../../assets/salvador.png';


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.5,
    fontFamily: 'Helvetica',
    backgroundColor: '#aaa',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'justify',
    color: '#222',
  },
});

export const PDFRenderer = ({ name, content }) => {
  let imageSrc = '';

  if (name.toLowerCase().includes('historia')) {
    imageSrc = historia;
  } else if (name.toLowerCase().includes('choi')) {
    imageSrc = choi;
  } else if (name.toLowerCase().includes('ji')) {
    imageSrc = Ji;
  } else if (name.toLowerCase().includes('kim')) {
    imageSrc = kim;
  } else if (name.toLowerCase().includes('salvador')) {
    imageSrc = salvador;
  }

  const MyDocument = (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text style={styles.title}>{name}</Text>
          {content.split('\n').map((line, index) => (
            <Text key={index} style={styles.text}>
              {line}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  return (
    <div 
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', backgroundColor: '#333', border: 'none', justifyContent: 'space-between', padding: '0 .5rem' }}
    >
      <img src={imageSrc} alt="" width={"20%"} />
      <PDFViewer width="76%" height="500px">{MyDocument}</PDFViewer>
    </div>
  );
};

PDFRenderer.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
