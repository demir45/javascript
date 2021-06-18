// ======================================================
//            NESNELER (OBJECTS)
//======================================================
// Diziler sıralı bellek bölgeleridir. Dolayısıyla dizilere erişim indisleme ile yapılır.
// Sıralı belleklere ihtiyaç varsa (structred) dizi kullanmak mantıklıdır.
// Eğer veriler kompleks ise o zaman dizlerde erişim güçlüğü ortaya çıkar.
// ! OBJECT
// Nesnelerde Key-value (property-value) yapısı kullanlır.
// Nesnelerde aradıgımız veriyi erişmek için property adini kullanmak yeterlidir.
// const insan = {
//   ad: 'Can',
//   soyad: 'Yilmaz',
//   yas: 30,
//   meslek: 'developer',
//   diller: [
//     'Java',
//     'JS',
//     'C++',
//     'SQL',
//     'Phyton',
//   ],
// };
// console.log(insan);
// //.dot notasyonu ile verilere erişilebilir.
// console.log(insan.ad);
// // Köseli parantez erişimi (köşeli parantez içerisine bir expressiion yazmak mümkünüdür.)
// console.log(insan['diller']);
// const yazi = 'Adim';
// console.log(
//   `${yazi} ${insan.ad} ve yasim ${insan['yas']}`
// );

// insan.konum = "Türkiye";
// insan.email = "insan@gmail.com";
// insan["dogumTarihi"] = 1990;
// console.log(insan);

// const kisi = {
//   ad: 'Ahmet',
//   soyad: 'Can',
//   dogumTarihi: 1990,
//   meslek: 'tester',
//   tool: 'selenium',
//   ehliyet: true,
  // yasHesapla: function () {
  //   console.log(this);
  //   return (
  //     new Date().getFullYear() -
  //     this.dogumTarihi
  //   );
  // },
  // ozet: function () {
  //   console.log(
  //     `${this.ad} ${
  //       this.soyad
  //     } ${this.yasHesapla()} yasindadir. Mesleği ${
  //       this.meslek
  //     } likdir.`
  //   );
    //   return `${this.ad} ${this.soyad} ${this.yasHesapla()} yasindadir. Mesleği ${
    //     this.meslek
    //   } likdir.`;
//   },
// };
const tarih = new Date();
console.log(tarih.getTime());
console.log(tarih.getDay());
console.log(kisi.yasHesapla());
// console.log(kisi.ozet());
kisi.ozet();

// ======================================================
//                  Nesne Iterasyon Ornekleri
// ======================================================
const kisiler = [
  {
    ad: 'mustafa',
    soyad: 'can',
    meslek: 'developer',
    yas: 20,
  },
  {
    ad: 'ayse',
    soyad: 'yilmaz',
    meslek: 'tester',
    yas: 25,
  },
  {
    ad: 'canan',
    soyad: 'ari',
    meslek: 'grafiker',
    yas: 35,
  },
  {
    ad: 'ali',
    soyad: 'veli',
    meslek: 'team lead',
    yas: 26,
  },
  {
    ad: 'ceren',
    soyad: 'yilmaz',
    meslek: 'developer',
    yas: 24,
  },
];
console.log(kisiler);
// ÖRNEK: kisiler dizisindeki kisilerin mesleklerini konsola yazdiralim.
kisiler.forEach((x) =>
  console.log(x.meslek)
);
//ÖRNEK:kisiler dizisindeki tüm bireylerin yaşını bir arttırarak yazdırınız.
const yaslar = kisiler.map(
  (x) => x.yas + 1
);
console.log(yaslar);
// kisiler dizisinindeki kişilerin isimlerini büyük harf olarak değiştiren ve yaşlarini da 5 artırak
// yeni bir nesne oluşturan kodu yaziniz.
const yeniKisi = kisiler.map((x) => {
  return {
    ad: x.ad.toUpperCase(),
    yas: x.yas + 5,
  };
});

console.log(yeniKisi);
// Yaşı 25'e eşit veya küçük olanların adlarını yazdıran kodu yazınız.
kisiler
  .filter((x) => x.yas <= 25)
  .forEach((x) => console.log(x.ad));

// Mesleği developer olanların isim ve yaşlarını bir diziye kaydediniz.

const developerDizi = kisiler
  .filter(
    (x) => x.meslek == 'developer'
  )
  .map((x) => {
    return {
      ad: x.ad,
      yas: x.yas,
    };
  });
console.log(developerDizi);
// kisilerin ortalama yasini hesaplayiniz.

const ortYas = (
  kisiler.reduce(
    (toplam, kisi) => toplam + kisi.yas,
    0
  ) / kisiler.length
).toFixed(2);
console.log(ortYas);
