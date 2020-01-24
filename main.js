let people = [
    ["dr.", "Leonel", "Boudreau", "male"],
    ["mr.", "Alfred", "Bullock", "male"],
    ["miss", "Daniela", "Lockhart", "female"],
    ["mrs.", "Michelle", "Hardy", "female"],
    ["mr.", "Ahmad", "Eaton", "male"],
    ["mrs.", "Annette", "Means", "female"],
    ["mr.", "Dwight", "Schuster", "male"]
];

//for - html
function htmlTableF(arr, el) {
    let html = '<table>';
    for (let i = 0; i < arr.length; ++i) {
        html += '<tr>';
        for (let j = 0; j < arr[i].length; ++j) {
            html += '<td>' + arr[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    el.innerHTML = html;
}

//htmlTableF(people, document.body)

//for of - html
function htmlTableFO(arr, el) {
    let html = '<table>'
    for (const row of arr) {
        html += '<tr>'
        for (const val of row) {
            html += '<td>' + val + '</td>'
        }
        html += '</tr>'
    }
    html += '</table>'
    el.innerHTML = html
}

//htmlTableFO(people, document.body)

//while - html
function htmlTableW(arr, el) {
    let html = '<table>';
    let i = 0;
    while (i < arr.length) {
        let j = 0;
        html += '<tr>'
        while (j < arr[i].length) {
            html += '<td>' + arr[i][j] + '</td>'
            ++j;
        }
        html += '</tr>'
        ++i;
    }
    el.innerHTML = html + '</table>'
}

//htmlTableW(people, document.body)

//for each - html
function htmlTableFE(arr, el) {
    let html = '<table>'
    arr.forEach(function (row) {
        html += '<tr>'
        row.forEach(function (val) {
            html += `<td>${val}</td>`
        })
        html += '</tr>'
    })
    el.innerHTML = html + '</table>'
}

//htmlTableFE(people, document.body)

//map - html
function htmlTableM(arr, el) {
    const tableHtml = arr.map(function (row) {
        const rowHtml = row.map(function (val) {
            return `<td>${val}</td>`
        }).join('')
        return `<tr>${rowHtml}</tr>`
    }).join('')
    el.innerHTML = `<table>${tableHtml}</table>`
}

//htmlTableM(people, document.body)

//reduce - html
function htmlTableR(arr, el) {
    el.innerHTML = arr.reduce(function (html, rows) {
        return html + rows.reduce(function (html, val) {
            return html + '<td>' + val + '</td>'
        }, '<tr>') + '</tr>'
    }, '<table>') + '</table>'
}

//htmlTableR(people, document.body)

//for - create
function createTableFC(arr, el) {
    const table = document.createElement('table');
    for (let i = 0; i < arr.length; ++i) {
        const tr = document.createElement('tr');
        for (let j = 0; j < arr[i].length; ++j) {
            const td = document.createElement('td');
            td.textContent = arr[i][j];
            tr.append(td);
        }
        table.append(tr)
    }
    el.append(table);
}

//createTableFC(people, document.body)

//for of - create
function createTableFOW(arr, el) {
    const table = document.createElement('table');
    for (const row of arr) {
        const tr = document.createElement('tr');
        for (const val of row) {
            const td = document.createElement('td');
            td.innerText = val;
            tr.append(td);
        }
        table.append(tr);
    }
    el.append(table);
}

//createTableFOW(people, document.body)

//while - create
function createTableWC(arr, el) {
    const table = document.createElement('table');
    let i = 0;
    while (i < arr.length) {
        const tr = document.createElement('tr')
        let j = 0;
        while (j < arr[i].length) {
            const td = document.createElement('td');
            td.append(arr[i][j]);
            tr.append(td);
            ++j;
        }
        table.append(tr);
        ++i;
    }
    el.append(table);
}

//createTableWC(people, document.body)

//for each - create
function createTableFEW(arr, el) {
    const table = document.createElement('table')
    arr.forEach(function (row) {
        const tr = document.createElement('tr');

        row.forEach(function (val) {
            const td = document.createElement('td');
            td.innerText = val;
            tr.append(td);
        })
        table.append(tr);
    })
    el.append(table);
}

//createTableFEW(people, document.body)

//map - create
function createTableMC(arr, el) {
    const table = document.createElement('table')
    const rows = arr.map(function (row) {
        const tr = document.createElement('tr')
        const cells = row.map(function (val) {
            const td = document.createElement('td');
            td.innerText = val;
            return td;
        })
        tr.append(...cells);
        return tr;
    })
    table.append(...rows);
    el.append(table);
}


//reduce - create
function createTableRC(arr, el) {
    const table = arr.reduce(function (table, row) {
        const tr = row.reduce(function (tr, value) {
            const td = document.createElement('td');
            td.innerText = value;
            tr.append(td);
            return tr;
        }, document.createElement('tr'));
        table.append(tr);
        return table;
    }, document.createElement('table'));
    el.append(table);
}

//createTableRC(people, document.body)
