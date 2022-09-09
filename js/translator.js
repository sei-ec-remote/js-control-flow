const o = {
    english: 'Welcome',
    danish: 'Velkomst',
    dutch: 'Welkom',
  }
  
  function GetLang(arg) {
  
    for (list in o) {
      if (arg === list) {
        console.log(o[list])
      }
    }
    if (arg !== list) {
      console.log(o.english);
    }
    if (arg !== list) {
        console.log(o.dutch);
    }
  
  }
  GetLang('danish');