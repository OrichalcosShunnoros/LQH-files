import PropTypes from 'prop-types';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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

export const PDFGenerator = ({ title, content }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {content.split('\n').map((line, index) => (
          <Text key={index} style={styles.text}>
            {line}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

PDFGenerator.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
