const LELANG =(MENIT)=>{


    HARGA = 10000
    for(i=1;i<= MENIT;i++){

        if(i%4==0){HARGA = HARGA + Math.ceil(HARGA * 0.1)}
        else{HARGA = HARGA + Math.ceil( HARGA * 0.2)}
        if(HARGA>=30000000){return 'Barang Sudah Terjual'}
    }
    return HARGA
}
console.log(LELANG(2))
console.log(LELANG(50))
console.log(LELANG(49))
