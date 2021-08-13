function SnapCrackle(maxValue) {

    let meuRetorno = []
for(let i = 1 ;i <=maxValue; i++){
    if ( i % 2 !== 0 )
     meuRetorno.push("Snap")
     if (i % 5 == 0)
    meuRetorno.push("Crackle")
    

  }

    return meuRetorno}

    console.log(SnapCrackle(20))











