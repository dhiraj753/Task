// Sample data for initial company list

var companies = [
    { name: 'Company A', description: 'Description A', location: 'Location A' },
   
];



document.addEventListener('DOMContentLoaded', function () {
    displayCompanyList();
});

function addCompany() {
    var companyName = document.getElementById('companyName').value;
    var companyDescription = document.getElementById('companyDescription').value;
    var companyLocation = document.getElementById('companyLocation').value;

    // Add the new company to the list
    companies.push({ name: companyName, description: companyDescription, location: companyLocation });

    // Clear the form
    document.getElementById('addCompanyForm').reset();

    // Update the displayed company list
    displayCompanyList();
}

function displayCompanyList() {
    var companyList = document.getElementById('companyList');
    companyList.innerHTML = ''; // Clear the list

    // Display each company in the list
    companies.forEach(function (company) {
        var listItem = document.createElement('li');
        listItem.textContent = `Name: ${company.name}, Description: ${company.description}, Location: ${company.location}`;
        companyList.appendChild(listItem);
    });
}
