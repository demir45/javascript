// ======================================================
//                   FOR IN DÖNGÜSÜ
// ======================================================

//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------
const hayvanlar = [
  'fil',
  'deve',
  'kuş',
  'deve',
  'fare',
  'kedi',
  'deve',
];

const ara = prompt(
  'hayvan ismi giriniz.'
);
const buldondur = function (ara) {
  let say = 0;

  for (const item of hayvanlar) {
    // console.log(item);
    if (item == ara) {
      say++;
    }
  }
  //   console.log(say);
  return say;
};
// buldondur(ara);
console.log(buldondur(ara));
