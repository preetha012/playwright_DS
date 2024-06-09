const ExcelJs = require('exceljs');

async  function readExcel() {

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("/Users/anoop/Desktop/Playwright_projects/testData/playwrightData.xlsx");
    const worksheet = workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row,rowNumber) => {
        row.eachCell((cell,colNumber) => {
            console.log(cell.value);
        })
    })
    
  }


 readExcel();