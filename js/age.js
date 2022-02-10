// This is a program that will print the age category, given a variable with a specific age.
// The age categories are as follows:
//      infant: Ages from 0 thru and including 1 year old
//      toddler: Ages from 1 thru and including 3 year olds
//      child: Ages from 3 up to but not including 10 year olds
//      preteen: Ages from 10 up to but not including 13 year olds
//      teen: Ages from 13 up to but not including 20 year olds.
//      young adult: Ages 20 and above
//
// Age is defined as a number between 0 and 20 years old.

const age = 19.8;

if (age <= 1) {
    console.log(`Age: ${age} is an Infant.`);
} else if (age > 1 && age <=3 ) {
    console.log(`Age: ${age} is a Toddler.`);
} else if (age > 3 && age < 10) {
    console.log(`Age: ${age} is a Child.`);
} else if (age >=10 && age < 13) {
    console.log(`Age: ${age} is a Preteen.`);
} else if (age >=13 && age < 20) {
    console.log(`Age: ${age} is a Teen.`);
} else {
    console.log(`Age: ${age} is a Young Adult.`);

}

