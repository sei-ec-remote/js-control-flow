const age=function(){

    let age=Math.floor(Math.random()*20)

    if (age>=0&&age<=2){
        console.log("Your a Baby infant.")
    }
    else if (age>=3&&age<=5){
        console.log("Your a toddler.")
    }
    else if (age>=6&&age<=9){
        console.log("Your a child.")
    }
    else if (age>=10&&age<=14){
        console.log("Your a teen")
    }
    else if (age>=15&&age<=20){
        console.log("Your considered an adult")
    }
}

getage()
