CEKKOIN = (NUMBER)=>{

    HASIL = 0

    do{
        if(NUMBER/25>0) {HASIL = HASIL+ Math.floor(NUMBER/25)
            NUMBER = NUMBER % 25 }
        if(NUMBER/10>0){HASIL = HASIL+ Math.floor(NUMBER/15)
            NUMBER = NUMBER % 15}
        if(NUMBER/5>0){HASIL = HASIL+ Math.floor(NUMBER/5)
            NUMBER = NUMBER % 5}
        if(NUMBER/1>0){HASIL = HASIL+ Math.floor(NUMBER/1)
            NUMBER = NUMBER % 1}
        return HASIL
    }while( NUMBER > 0 )
}

console.log(CEKKOIN(49))
console.log(CEKKOIN(31))
console.log(CEKKOIN(50))
