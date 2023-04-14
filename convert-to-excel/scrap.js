const fs = require('fs')
const { type } = require('os')



function testFileRead(){    
    fs.readFile('0912.TXT','utf8',(err,data)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log
                (`The Shape of Data ${typeof data} \n 
                The data as below : `)
        });
    
}

testFileRead()


/////////////////

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)

.then((data)=>{       //Create a function to write README file -- Example: fuction writeToFile(fileName, data) {}
    const content = generateMarkdown(data); 

    fs.writeFile('README.md', content, (err)=>          //James suggested telling comp which readme to use in a diff folder
        err ? console.log(err): console.log('Created your README successfully.')
    );
});
}

// Function call to initialize app
init();


// // Load the SheetJS library
// import XLSX from 'xlsx';

// const fileReader = new FileReader();

// fileReader.readAsText('./assets/0912.txt');

// fileReader.onload = (event) => {
//   const textData = event.target.result;
  
//   // Split the text data into rows and columns
//   const rows = textData.split('\n').map(row => row.split('\t'));
  
//   // Create a new workbook and add a worksheet
//   const workbook = XLSX.utils.book_new();
//   const worksheet = XLSX.utils.aoa_to_sheet(rows);
  
//   // Add the worksheet to the workbook
//   XLSX.utils.book_append_sheet(workbook, worksheet, '0912data');
  
//   // Save the workbook as an Excel file
//   XLSX.writeFile(workbook, './assets/Book1.xlsx');
// };





// Write to an excel file   
fs.writeFile('./assets/Book1.xlsx', data, (err) => 
err ? console.log(err):console.log('Created xlsx file successfully')
);




// split the text data into rows and columns
const rows = textData.split('\n').map(row => row.trim().split(/\s+/));

// Create a new workbook and add a worksheet
const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.aoa_to_sheet(rows);

// Set the column widths based on the length of the data in the first row
const columnWidths = rows.length > 0 ? rows[0].map(cell => ({ width: cell.length })) : [];
XLSX.utils.sheet_set_column_widths(worksheet, columnWidths);

// Add the worksheet to the workbook and save it to a file
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
XLSX.writeFile(workbook, 'output.xlsx');