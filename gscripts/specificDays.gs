function specificDays(dayName, monthName, year) {
    // set names
    var monthNames = ["January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];

    // change string to index of array
    var day = dayNames.indexOf(dayName);
    var month = monthNames.indexOf(monthName) + 1;

    // determine the number of days in month
    var daysinMonth = new Date(year, month, 0).getDate();

    // set counter
    var sumDays = 0;

    // iterate over the days and compare to day
    for (var i = 1; i <= daysinMonth; i++) {
        var checkDay = new Date(year, month - 1, parseInt(i)).getDay();
        if (day == checkDay) {
            sumDays++;
        }
    }

    // show amount of day names in month
    return sumDays;
}
