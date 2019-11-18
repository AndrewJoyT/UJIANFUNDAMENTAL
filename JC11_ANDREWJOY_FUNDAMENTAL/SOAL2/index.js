class User {
    constructor (a,b,c) {
        this.nama=a,
        this.katasandi=b,
        this.role=c
    }
}

var dataUser=[
    new User('BEBAS','123','user'),
    new User('TAMBUN','123','user'),
    new User('JOY','123','admin'),
    new User('ANDREW','123','admin')

]

var dataUserLogin = {}

const LoginCLick=()=> {
    var usercuk=document.getElementById('nama').value
    var sandicuk=document.getElementById('katasandi').value
    var login=false 
    for(var i=0;i<dataUser.length;i++) {
        if(usercuk==dataUser[i].nama && sandicuk==dataUser[i].katasandi) {
            login=true
            dataUserLogin=dataUser[i]
        }
    }
    

    if(login) {
        document.getElementsByTagName('h2')[0].innerHTML=`USER : ${dataUserLogin.nama}`
        if(dataUserLogin.role=='admin') {
            
            document.getElementsByTagName('h2')[0].innerHTML=`ADMIN : ${dataUserLogin.nama}`

            document.getElementsByTagName('h1')[1].innerHTML=`Apa yang ingin kamu ubah/tambah?`
            document.getElementsByTagName('p')[1].innerHTML=`<table>
            <thead>
                <tr>
                <td>No.</td> 
                <td>Kegiatan</td>
                <td>Hari</td>
                <td>Gambar</td>
                </tr>
            </thead>
            <tbody> </tbody>
            <tfoot> 
            <tr>
            <td></td>
            <td><input type="text" class="addkegiatan" placeholder="MasukKan Nama Kegiatan"/></td>
            <td><input type="text" class="addkegiatan" placeholder="MasukKan Hari"/></td>
            <td><input type="text" class="addkegiatan" placeholder="MasukKan URL Gambar"></td>
            <td><button class="button1" onclick="addkegiatan()">Add Kegiatan</button></td>
            </tr>
            </tfoot>
            </table>`
            
            printKegiatanAdmin(listdata)
              



        } else {
            document.getElementsByTagName('h1')[1].innerHTML=`Apa yang ingin kamu beli?`
            document.getElementsByTagName('p')[1].innerHTML=`<table>
            <thead>
                <tr>
                <td>No.</td> 
                <td>Kegiatan</td>
                <td>Hari</td>
                <td>Gambar</td>
                </tr>
            </thead>
            <tbody> </tbody>
            
            </table>`
            printKegiatan(listdata)
            printFolder(listFOlder)         
           

        }
        document.getElementsByTagName('p')[0].innerHTML=`<button onclick="logoutuser()">Logout</button>`
        document.getElementById('divlogin').innerHTML=``
    } else {
        document.getElementsByTagName('h2')[0].innerHTML=`Username dan Password anda salah.`
    }

}

const logoutuser=()=>{
dataUserLogin={}
document.getElementsByTagName('h2')[0].innerHTML=''
document.getElementsByTagName('h3')[0].innerHTML=''
document.getElementsByTagName('p')[0].innerHTML=``
document.getElementById('divlogin').innerHTML=`<h1>Login</h1>
<span>Username : <input type="text" id="nama"></span> <br> <br>
<span>Password : <input type="password" id="katasandi"></span> <br> <br>
 <button onclick="LoginCLick()">Login</button>`

document.getElementsByTagName('h1')[1].innerHTML=``
document.getElementsByTagName('p')[1].innerHTML=``
document.getElementsByTagName('h3')[0].innerHTML=``

}





// batas sucii 


class List{
    constructor(a,b,c) {
        this.kegiatan=a,
        this.hari=b,
        this.gambar=c
    }
}

var listdata=[
        new List('Lari','Senin','www.lari.com/ASAL.jpg'),
        new List('Estafet','Selasa','www.estafet.com/ASAL,jpg'),
        new List('Atletik','Rabu','www.atletik.com/ASAL.jpg')
]



const printKegiatan=(a)=> {
    var output=''   
    a.forEach((val,index) => {
        output+= `<tr>
        <td>${index+1}</td>
        <td>${val.kegiatan}</td>
        <td>${val.hari}</td>
        <td><img src=${val.gambar} height='100px'/></td>       
        </tr>`
           
    });
    document.getElementsByTagName('tbody')[0].innerHTML=output
}


const printKegiatanAdmin=(a)=> {
    var output=''   
    a.forEach((val,index) => {
        output+= `<tr>
             <td>${index+1}</td>
            <td>${val.kegiatan}</td>
            <td>${val.hari}</td>
            <td> <img src=${val.gambar} height='100px'/> </td>
            <td>
                <button class="addfolder" onclick="DeleteClick(${index})">Delete</button>
                <button class="addfolder" onclick="EditClick(${index})">Edit</button> 
            </td>              
        </tr>`
           
    });
    document.getElementsByTagName('tbody')[0].innerHTML=output
}


var listFOlder = []

const printFolder=(a)=> {
    var output=''   
    jumlah=0
    totalfolder=0
    a.forEach((val,index) => {
        output+= `<tr>
            <td>${index+1}</td>
            <td>${val.kegiatan}</td>
            <td>${val.hari}</td>
            <td><img src=${val.gambar} height='100px'/></td>
            <td><button onclick="onDeleteClick(${index})">delete</button></td>
            </tr>`
            jumlah++
            totalfolder+=val.hari
    });
    document.getElementsByTagName('tbody')[1].innerHTML=output
    if (jumlah!==0) {
        document.getElementsByTagName('h3')[0].innerHTML=`Item Belanja Anda ${jumlah} `
        document.getElementById('textlist').innerHTML=`Total belanja anda sebesar Rp. ${totalfolder}`
        document.getElementById('checkout').innerHTML=`<button onclick="yukcheckOut(),start()">checkout</button>`
    } else {
        document.getElementById('textlist').innerHTML=``
    }
   
}


const onAddFolderClick=(index)=> {
    var addCheck=confirm('anda yakin memilih ini?')
    var head=''
    
   if (addCheck==true) {
     head = `<tr>
                <td>No.</td> 
                <td>Kegiatan</td>
                <td>Hari</td>
                <td>Gambar</td>
            </tr>`
            document.getElementsByTagName('thead')[1].innerHTML=head
            listFOlder.push(listdata[index])
        }
            printFolder(listFOlder)
}

const onDeleteClick=(index)=> {
    var deleteCheck=confirm('Yakin mau delete Kegiatan ini?')
    var head=''

    if(deleteCheck==true) {
        if (listFOlder.length==1) {
            document.getElementsByTagName('thead')[1].innerHTML = head
            document.getElementById('checkout').innerHTML= ""
        }
        listFOlder.splice(index,1)
    }
    printFolder(listFOlder)
}


const jumlahHari=(k)=> {
var output=0 
for (i=0;i<k.length;i++) {
    output+=k[i]['hari']
}
return output
}



const DeleteClick=(index)=> {
    var chekDelete=confirm('Yakin mau delete Kegiatan ini?')
    var head=''

    if(chekDelete==true) {
        
        listdata.splice(index,1)
    }
    printKegiatanAdmin(listdata)
}


const EditClick=(index)=> {
    var editKegiatan=prompt('Edit nama Kegiatan yang baru')
    var editHari=(prompt('Edit Hari yang baru')) 
    var editGambar=prompt('Edit URL gambar yang baru')

    listdata[index].kegiatan=editKegiatan
    listdata[index].hari=editHari
    listdata[index].gambar=editGambar 
    printKegiatanAdmin(listdata)
}

const addkegiatan=()=>{
    var addCheck=confirm("Yakin Mau nambah Kegiatan ini?")
    if (addCheck==true) {
        var input=document.getElementsByClassName('addkegiatan')
        var kegiatanBaru=input[0].value
        var hariBaru=(input[1].value)
        var imageBaru=input[2].value
        listdata.push(new List(kegiatanBaru,hariBaru,imageBaru))            
    }
    printKegiatanAdmin(listdata)
}