function calculateDays() {
    // Get the start and end dates from the form
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);

    // Check if the dates are valid
    if (isNaN(startDate) || isNaN(endDate)) {
        alert('Please enter valid dates.');
        return;
    }

    // Calculate the total number of days
    var timeDiff = endDate - startDate;
    var totalDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


    // Display the result
    document.getElementById('result').innerHTML = 
        'Total Number of Days: ' + totalDays;

    // Clear the input fields
    document.getElementById('startDate').value = '';
    document.getElementById('endDate').value = '';
}