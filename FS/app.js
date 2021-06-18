console.log('uygulamamız başlıyor...');
const fs = require('fs');
const os = require('os');
const notes = require('./test.js');
const _ = require('lodash');

// console.log(process.argv[2]);
const komut = process.argv[2];
console.log('Komut : ' + komut);

if (komut === 'sil') {
  console.log('Bu dosya siliniyor..');
} else if (komut === 'kaydet') {
  console.log(
    'Bu dosya kaydediliyor..'
  );
} else {
  console.log('komut bulunamadı..');
}

// console.log(_.isString(true));
// console.log(_.isString(os.userInfo()));
// console.log(_.isString('ahmet'));

// var sonHal = _.uniq([
//   'test',
//   1,
//   'test1',
//   2,
//   'test',
//   3,
// ]);
// console.log(sonHal);

// var dönenDeger = notes.testFonksiyonu();
// console.log(dönenDeger);

// let user = os.userInfo();
// console.log(user.username);

// fs.appendFileSync(
//   'yeniTest.txt',
//   'Sistem kullanıcısının adı : ' +
//     user.username
// );

// fs.appendFileSync(
//   'yeniTest.txt',
//   `Sistem kullanıcısının adı : ${user.username}`
// );

// fs.appendFile(
//   'text.txt',
//   'Bu bir test çalışmasıdır...',
//   function (err) {
//     if (err) {
//       console.log(err);
//     }
//   }
// );
