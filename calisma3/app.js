const maaslar = [
  4000, 5000, 3500, 7000, 8500, 6500,
  7500,
];

const liste =
  document.createElement('ul');
liste.className = 'liste';
document
  .querySelector('.liste-div')
  .appendChild(liste);

const listeyeEkle = function (satir) {
  const li =
    document.createElement('li');
  li.appendChild(
    document.createTextNode(satir)
  );
  liste.appendChild(li);
};

const diziyiListeyeEkle = function () {
  for (let a in maaslar) {
    listeyeEkle(maaslar[a]);
  }
};

const aciklamaGuncelle = function (
  dizi
) {
  const aciklama =
    document.querySelector('.aciklama');
  const yeniMaaslar = dizi.join(' ');
  aciklama.innerHTML = `Maaşlar ${yeniMaaslar} <br>
Toplam Maaş : ${dizi.reduce(
    (x, y) => x + y,
    0
  )}`;
};

diziyiListeyeEkle();
aciklamaGuncelle(maaslar);

document.querySelector(
  '.ekle'
).onclick = function () {
  const satir = document.querySelector(
    '.input-liste'
  );
  if (!satir.value) {
    alert(
      'Lütfen veri girişi yapınız.'
    );
  } else {
    maaslar.push(Number(satir.value));
    listeyeEkle(satir.value);
    satir.value = '';
    aciklamaGuncelle(maaslar);
  }
};
