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

type GenericDataProps = {
  data: {
    reportName: string;
    month: string;
    buildingName: string;
    reportArrData: {
      title: string;
      values: (number | string | null)[];
    }[];
  }
}[]

type DataProps = {
  title: string;
  values: (number | string | null)[];
}[];

type MoreData = {
  reportName: string;
  buildingName: string;
  month: string;
  reportArrData: DataProps;
}

type FinalData = {
  data: MoreData;
}[];

const data1: MoreData = {
  reportName: 'Daily Energy Report',
  buildingName: 'Building 1',
  month: 'Jan 2025',
  reportArrData: [
    {
      title: 'Month',
      values: ['Janauary 2025']
    },
    {
      title: 'Date',
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    {
      title: 'Chiller Electrical kWh',
      values: [7901, 8409, 8147, 8223, 7901, null, null, null, null, null, null, null, null, null, null]
    },
    {
      title: 'System Chilled Water TonHour',
      values: [7901, 8409, 8147, 8223, 7901, null, null, null, null, null, null, null, null, null, null]
    },
    {
      title: 'Chilled Water Pump Efficiency',
      values: [7901, 8409, 8147, 8223, 7901, null, null, null, null, null, null, null, null, null, null]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
  ]
}

const data2: MoreData = {
  reportName: 'Daily Energy Report',
  buildingName: 'Building 2',
  month: 'Feb 2025',
  reportArrData: [
    {
      title: 'Month',
      values: ['Janauary 2025']
    },
    {
      title: 'Date',
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    {
      title: 'Chiller Electrical kWh',
      values: [7901, 8409, 8147, 8223, 7901, null, null, null, null, null, null, null, null, null, null]
    },
    {
      title: 'System Chilled Water TonHour',
      values: [7901, 8409, 8147, 8223, 7901, null, null, null, null, null, null, null, null, null, null]
    },
    {
      title: 'Chilled Water Pump Efficiency',
      values: [7901, 8409, 8147, 8223, 7901, null, null, null, null, null, null, null, null, null, null]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
    {
      title: 'Cooling Tower Efficiency',
      values: [94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236, 93.333, 94.653, 93.681, 94.236]
    },
  ]
}

const monthData: FinalData = [
  { data: data1 },
  { data: data2 }
]

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
    <title>PDF Report</title>
    <style>
        body {
            font-size: 14px;
            color: #333;
            font-family: Arial, sans-serif;
        }
        h1 {
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
            text-align: left;
        }
        th, td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
  ${monthData.map(e => (`<><h1>${e.data.reportName}</h1>
    <table>
        <tbody>
            ${e.data.reportArrData.map(row => `
                <tr>
                    <td>${row.title}</td>
                    ${row.values.map(value => `<td>${value !== null && value !== undefined ? value : ''}</td>`).join('')}
                </tr>
            `).join('')}
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th>Category</th>
                ${e.data.reportArrData[0].values.map((_, index) => `<th>${index + 1}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${e.data.reportArrData.map(row => `
                <tr>
                    <td>${row.title}</td>
                    ${row.values.map(value => `<td>${value !== null && value !== undefined ? value : ''}</td>`).join('')}
                </tr>
            `).join('')}
        </tbody>
    </table>
    </>`))}
</body>
</html>
`;


const newInverted = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Report</title>
    <style>
        body {
            font-size: 14px;
            color: #333;
            font-family: Arial, sans-serif;
        }
        h1 {
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            font-size: 14px;
            text-align: left;
        }
        th, td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: center;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>
    <h1>Energy Consumption Report</h1>
    <table>
        <thead>
            <tr>
                ${monthData[0].data.reportArrData.map(col => `<th>${col.title}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${(() => {
    let maxLength = Math.max(...monthData[0].data.reportArrData.map(col => col.values.length));
    let rows = '';
    for (let i = 0; i < maxLength; i++) {
      rows += `<tr>`;
      monthData[0].data.reportArrData.forEach(col => {
        rows += `<td>${col.values[i] !== null && col.values[i] !== undefined ? col.values[i] : ''}</td>`;
      });
      rows += `</tr>`;
    }
    return rows;
  })()}
        </tbody>
    </table>
</body>
</html>
`;


const h = `
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
    // console.log('pdf', file.filePath);
    if (!file.filePath) return;
    // Alert.alert(file.filePath);
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
