function hesapla() {
  const r =
    document.getElementById('r').value;
  // console.log(r);
  // console.log(r.value);
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  const h =
    document.querySelector('.h').value;

  const hacim =
    document.querySelector('.hacim');
  const sonuc = Math.PI * r * r * h;
  console.log(sonuc, r, h);

  hacim.innerHTML = sonuc.toFixed(2);
  return hacim.innerHTML;
}

const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
