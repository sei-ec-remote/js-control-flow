//Infant 0-1 yro
//Toddler 1-4 yro
//Child 5-8
//Pre-teen 9-12
//Teen 13-17
//Young-Adult 18-20

let age = 0.9

if(age >= 18 && age <=20)
{
    console.log("Young Adult")
}
else if(age >= 13 && age <= 17)
{
    console.log("Teen")
}
else if(age >= 9 && age <= 12)
{
    console.log("Pre-teen")
}
else if(age >=5 && age <= 8)
{
    console.log("Child")
}
else if(age >= 1 && age <= 4)
{
    console.log("Toddler")
}
else
{
    console.log("Infant")
}
