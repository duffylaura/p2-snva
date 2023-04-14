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

