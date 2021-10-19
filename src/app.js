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