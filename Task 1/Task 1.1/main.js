let rows;
let columns;

function getRowsAndColumns() {
    do {
        rows = prompt("Enter the number of rows: ");
    } while (!isValidNumber(rows));

    do {
        columns = prompt("Enter the number of columns: ");
    } while (!isValidNumber(columns));
}

function isValidNumber(value) {
    return /^\d+$/.test(value);
}

function createTable(m, n) {
    let array = []; // Array
    let table = document.createElement("table");

    for (let i = 0; i < m; ++i) {
        array[i] = []; // 2D array
        let tr = document.createElement("tr");
        for (let j = 0; j < n; ++j) {
            array[i][j] = i;
            let td = document.createElement("td");
            td.textContent = array[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

getRowsAndColumns();
createTable(parseInt(rows), parseInt(columns));
