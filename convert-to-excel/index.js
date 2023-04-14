//Include packages needed 
//Inquirer
const fs = require('fs');
// SheetJS library
const XLSX = require('xlsx');

//Create a function to initialize app 
function init() {

    // Read the contents of the text file
   fs.readFile('./assets/0912.txt', 'utf8', (err, data) => {
        if (err) {console.log(err); return; }
    
    // format data 
    const textData = data; 

    // split the text data into rows and columns 
    // const rows = textData.split('\n').map(row => row.split('\s+')); //use string of space of any size
    const rows = textData.split('\n').map(row => row.trim().split(/\s+/));

    // Create a new workbook and add a worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, '0912data');
  
    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, './assets/excelFormat.xlsx');
    })      
}

init(); 

function readExcelConvertToJSON() {
    /* Read the Excel file */
    const workbook = XLSX.readFile("./assets/excelFormat.xlsx", { cellFormula: true });
   
    // /* Get the first worksheet */
    const worksheet = 1;

    /* Convert the worksheet data to JSON */
    const data = XLSX.utils.sheet_to_json(worksheet);

    /* Log the JSON data */
    console.log(data);
};

readExcelConvertToJSON(); 