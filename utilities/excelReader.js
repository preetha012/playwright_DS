const ExcelJs = require('exceljs');
const path = require('path');

class ExcelUtilities {
    async readExcel(filePath, sheetName) {
        const workbook = new ExcelJs.Workbook();
      //  await workbook.xlsx.readFile(filePath);
        const absolutePath = path.resolve(filePath);
        await workbook.xlsx.readFile(absolutePath);
        const worksheet = workbook.getWorksheet(sheetName);

        const data = [];
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber === 1) {
                // Skip header row
                return;
            }

            const rowData = {};
            row.eachCell((cell, colNumber) => {
                const columnHeader = worksheet.getRow(1).getCell(colNumber).value;
                if (columnHeader === 'username_valid' || columnHeader === 'password_valid') {
                    rowData[columnHeader] = cell.value;
                }
            });

            data.push(rowData);
        });

        return data;
    }
}

module.exports = ExcelUtilities;
