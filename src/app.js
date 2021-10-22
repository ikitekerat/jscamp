// JS Type Safe değildir.(Değişkene verilen tipin bir önemi yok 
//programcı en son verdiği değişkeni yazdırır.)
console.log("Merhaba Kodlama.io")
let dolarBugun = 9.30
let dolarDun = 9.20
//let anahtarı değişken tanımlamak için kullanılır.
{
    let dolarDun = 9.10
    // Burada ayrı bir blok oluşturduğum için burada ki işlemlerim
    // tamamen buraya ait olan işlemler olur.
}
console.log(dolarDun)

const euroDun = 11.2 //const anahtarına bir değer atandığında daha sonra o değişkenin
//euroDun = 11 hata satırı //değerini değiştiremezsin. Sabit anahtar.
console.log(euroDun)


//array
//camelCasing (isimlendirme yöntemidir. İlk harf küçük ikinci büyük.)(Genelde bunu kullanıcaz JS'de)
//PascalCasing (isimlendirme yöntemi. İlk ve ikinci harf büyük)

let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
console.log("<ul>")
for (let i = 0;i<konutKredileri.length;i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")

// !!!!!!BURADAN SONRASI ÖDEV İÇİN YAPILAN ÇALIŞMALAR!!!!!
console.log("BU KISIMDAN SONRASI ÖDEV İÇİN ALIŞTIRMALAR!!!!")

var sayi1 = 10
sayi1 = "Hello World"
console.log(sayi1)

let student = {id:1, name:"Mücahit"}
function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : " + puan)
}
save(student,undefined)

let students = ["Mücahit Çekim","Engin Demiroğ","Emine Çekim"]
console.log(students)

let students2 = [student,{id:1, name:"Emine"},"Ankara",15,{city:"Elazığ"}]
console.log(students2)

//rest kullanımda olan üç nokta
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts)
showProducts("Elma",[10,20,30],40,50,60)

//Spread kullanımı (Spread ayrıştırma demek)
let points = [1,2,3,4,5,6,7,8,9]
console.log(...points)
console.log(Math.max(...points))
console.log(..."MÜCAHİT","Çekim")

//Destructuring (parçalamak demek ve değişkenlere atama yapmak için kullanılır)
let populations = [10000,20000,30000]
let [small,medium,high] = populations
console.log(small)
console.log(medium)
console.log(high)
//Destructuring örnek1
let icerikler = [10000,20000,30000,[100000,200000]]
let [kucuk,orta,buyuk,[ankara,istanbul]] = icerikler
console.log(kucuk)
console.log(orta)
console.log(buyuk)
console.log(ankara)
console.log(istanbul)
//Destructuring örnek2
function someFunction([small1,medium1,high1,],number) {
    console.log(small1)
    
}
someFunction(populations)
//Destructuring örnek3 objeler üzerinde 
let category = {id:1, name:"İçecek"}
console.log(category.name)
console.log(category["name"])
let {id,name} = category
console.log(id)
console.log(name)