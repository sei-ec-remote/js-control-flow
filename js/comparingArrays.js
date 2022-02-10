const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

if(arr2.length === arr3.length)
{
    let isEqual = true;
    for(let i = 0; i < arr2.length; i++)
    {
        if(arr2[i] === arr3[i])
        {
            isEqual = true;
        }
        else
        {
            isEqual = false;
            break
        }
    }

    if(isEqual)
    {
        console.log('Equal')
    }
    else
    {
        console.log('Not equal')
    }
    
}
else if(arr2.length !== arr3.length)
{
    console.log('Not equal')
}