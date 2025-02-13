/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  Text,
  TouchableHighlight,
  useColorScheme,
  Pressable
} from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from "react-native-file-viewer";

const invoice = [
  {
    id: 1,
    key: 'Recipient',
    value: 'Kolawole Emmauel',
  },
  {
    id: 2,
    key: 'Earrings',
    value: '$40.00',
  },
  {
    id: 3,
    value: 'necklace',
    key: '$100.00',
  },
  {
    id: 4,
    key: 'Total',
    value: '$140.00',
  },
];

const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
                 .list {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .key {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        color: #c9cdd2;
        font-size: 12px;
        line-height: 1.2;
         width: 40%;
      }
      .value {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        color: #5e6978;
        font-size: 12px;
        line-height: 1.2;
        text-transform: capitalize;
        width:60%;
        flex-wrap: wrap;
      }
        </style>
    </head>
    <body>
        <h1>Treasury Jewels</h1>
        <div class="confirmationBox_content">
        ${invoice.map(
  el =>
    `<div
                  class="list"
                  key=${el.id}

                >
                  <p class="key">${el.key}</p>
                  <p class="key">${el.value}</p>
                </div>`,
)}
    </div>
    </body>
    </html>
`;

const createPDF = async () => {
  try {
    let PDFOptions = {
      html: htmlContent,
      fileName: 'test_pdf',
      directory: Platform.OS === 'android' ? 'Downloads' : 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(PDFOptions);
    console.log('pdf', file.filePath);
    if (!file.filePath) return;
    Alert.alert(file.filePath);
    FileViewer.open(file.filePath)
  } catch (error) {
    Alert.alert('Failed to generate pdf', error?.toString())
    console.log('Failed to generate pdf', error);
  }
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable style={{ backgroundColor: 'skyblue', paddingHorizontal: 30, paddingVertical: 10, borderRadius: 8 }}
        onPress={createPDF}>
        <Text style={{ color: '#000' }}>Create PDF</Text>
      </Pressable>
    </SafeAreaView>
  );
}


export default App;
