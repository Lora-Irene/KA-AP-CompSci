//set variables for requirements to graduate
var CumulativeGPA
var totalUnits
var languageUnits

// must complete all requirements to graduate
if (CumulativeGPA > 2.0 && 
    totalUnits >= 120 && 
    languageUnits >= 8) {
        document.write ("You can graduate!")
    }
}

//set variables for eligibility to participate in AP Comp Sci A class
var cspGrade = 67
var progGrade = 88
var summerCamp = true

//only one of the above requirements must be met.
if (cspGrade >= 75 || 
progGrade >= 75 ||
summerCamp === true) {
    document.write ("You're eligible for AP CS A!");
}