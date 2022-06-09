function fahrenheitConvertTo(type, temp) {
    if (type === "C") {
        console.log((temp - 32)/1.8)
    } else if (type === "K") {
        console.log(((temp-32)*5/9)+273.15)
    }
}

fahrenheitConvertTo("K", 3454)