// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

//! 1.YÖNTEM  :    FUNCTION DECLARATION
//* Fonksiyonun tanımlanması
function yazdir() {
  console.log('Ahmet');
}
yazdir(); //* fonksiyonun çağırılması

//* Örnek : Parametreli fonksiyon

// function yazdirAd(ad, yas) {
//   console.log(
//     `Adınız : ${ad}, Yaşınız : ${yas}`
//   );
// }

// yazdirAd('Ahmet', 41); // call | invoke

// //* Örnek : Parametreli, dönüş değerli fonksiyon
// function yasHesapla(dogum) {
//   return 2021 - dogum;
// }
// console.log(
//   `Yaşınız : ${yasHesapla(1990)}`
// );
// yasınız = yasHesapla(1980);
// console.log(`Yaşınız : ${yasınız}`);

// let sayi = prompt('Sayı giriniz');

// function tekMiCiftMi(sayi) {
//! sayi%2 ? "TEK" : "ÇİFT"; // ========> 0 false değer aldığı için ters yazdık

//   sonuc = null;
//   if (sayi % 2 == 0) {
//     sonuc = 'çift sayı'; // alert('çift sayı');
//   } else {
//     sonuc = 'tek sayı'; //alert('tek sayı');
//   }
//   return sonuc;
// }
// console.log(
//   `sayı : ${tekMiCiftMi(sayi)}`
// );
//! 2.YÖNTEM  : Function expression
//* Örnek : En büyük sayı bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;

  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};

// console.log(
//   'En büyük : ' + buyukBul(3, 5, 8)
// );
// console.log(
//   `En büyük Math.max : ${Math.max(
//     1,
//     3,
//     2
//   )}`
// );

//! 3.YÖNTEM  :    ARROW (OK) Function

// const topla = (a, b) => a + b; // Arrow fonksiyonu tanımlaması

// console.log(topla(3, 6)); // invoke

// const tekCift = (sayi) =>
//   sayi % 2 == 0 ? 'ÇİFT' : 'TEK';
// console.log(tekCift(sayi));
// console.log(tekCift(8));

//* Örnek : üs alma

// const taban = prompt(
//   'taban sayısı giriniz'
// );
// const us = prompt('üs sayısı giriniz');

// const usAl = (t, u) => t ** u;
// console.log(usAl(taban, us));

//* Örnek : Menü

const menu = () => {
  console.log(
    '========================================'
  );
  console.log(
    '            JAVASCRIPT DERSİ            '
  );
  console.log(
    '========================================'
  );
};

menu();

//* Örnek :

const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adım : ${ad}, Soyadım : ${soyad}, Yaşım : ${
    2021 - dogum
  }`;
  return bilgi;
};

console.log(
  bilgiVer('Ahmet', 'Demir', 1980)
);

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
const r = prompt('Yaricapi giriniz:');
const h = prompt('Yukseklik giriniz:');
const hacimHesapla = (r, h) =>
  Math.PI * r * r * h;
// * En yakın sayiya yuvarlar.
console.log(
  'Silindir Hacmi(Math.round):' +
    Math.round(hacimHesapla(r, h))
);
// * Virgulden sonra 2 basamak alir.
console.log(
  'Silindir Hacmi(.toFixed(2)):' +
    hacimHesapla(r, h).toFixed(2) // ! .toFixed() virgülden sonra kaç rakam görmek istiyorsak.
);
