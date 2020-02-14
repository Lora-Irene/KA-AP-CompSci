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

//Send email if not able to graduate
if (!(CumulativeGPA > 2.0 && 
    totalUnits >= 120 && 
    languageUnits >= 8)) {
        document.write ("Warning: You have not met the requirements to graduate!")
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
} else {
    document.write ("You are not eligible for AP CS A");
}

//Set variables for grades in science classes
var biologyGrade
var chemistryGrade
var physicsGrade
//Required to pass Biology with 65 or greater and either chemistry or physics
if (biologyGrade > 65 &&
(chemistryGrade > 65 || physicsGrade > 65)) {
    document.write ("Science requirement satisfied");
} else {
    document.write ("Science requirement not satisfied")
}