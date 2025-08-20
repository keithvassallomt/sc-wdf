const addresses = [];

document.addEventListener('DOMContentLoaded', function() {
    loadAddresses();
    updateTable();
    setupInputErrorHandlers();
    document.getElementById('inputName').focus();
});

document.getElementById('entryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    processForm();
    updateTable();
});

function setupInputErrorHandlers() {
    document.getElementById('inputName').addEventListener('input', function() {
        document.getElementById('name-error').classList.add('d-none');
    });

    document.getElementById('inputSurname').addEventListener('input', function() {
        document.getElementById('surname-error').classList.add('d-none');
    });

    document.getElementById('inputEmail').addEventListener('input', function() {
        document.getElementById('email-error').classList.add('d-none');
    });
}

function loadAddresses() {
    const storedAddresses = localStorage.getItem('addresses');
    if (storedAddresses) {
        const parsedAddresses = JSON.parse(storedAddresses);
        addresses.splice(0, addresses.length, ...parsedAddresses);
    }
}

function saveAddresses() {
    localStorage.setItem('addresses', JSON.stringify(addresses));
}

function validateForm() {
    let name = document.getElementById('inputName').value;
    let surname = document.getElementById('inputSurname').value;
    let email = document.getElementById('inputEmail').value;    

    let errors = false;

    if (!name) {
        document.getElementById('name-error').classList.remove('d-none');
        errors = true;
    }
    if (!surname) {
        document.getElementById('surname-error').classList.remove('d-none');
        errors = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('email-error').classList.remove('d-none');
        errors = true;
    }
   
    return errors;
}

function processForm() {
    validateForm();

    let name = document.getElementById('inputName').value;
    let surname = document.getElementById('inputSurname').value;
    let email = document.getElementById('inputEmail').value;

    addresses.push({
        name: name,
        surname: surname,
        email: email
    });
    saveAddresses();
    document.getElementById('entryForm').reset();
    document.getElementById('inputName').focus();
}

function updateTable() {
    if (addresses.length === 0) {
        document.querySelector('#nothing-here').style.display = 'block';
        return;
    }

    let addressTable = document.querySelector('.table tbody');

    let rows = '';
    let i = 1;
    for (let address of addresses) {
        let tableRow = `
        <tr>
            <th scope="row">${i}</th>
            <td>${address.name}</td>
            <td>${address.surname}</td>
            <td>${address.email}</td>
        </tr>
        `;
        rows += tableRow;
        i++;
    }

    document.querySelector('#nothing-here').style.display = 'none';
    addressTable.innerHTML = rows;
}