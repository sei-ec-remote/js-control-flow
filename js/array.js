let arr1 = [1, 'a', 3, 5, 7, 9, 'i'];

let arr2 = [1, 'a', 3, 5, 'e', 7, 9, 'i'];

let result = true;

for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] != arr2[i]) {
            console.log(`They are not the same!`);
            result = false;
            break;
         }
         
        if ((arr1[i] == arr2[i]) && (arr1.length == arr2.length)) {
             console.log('They are the same')
             return;
         }
                 
    }
    console.log(result);
