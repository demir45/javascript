// ======================================================
//                   GETELEMENTBYID()
// ======================================================
const paragraf =
  document.getElementById('par');
paragraf.style.backgroundColor =
  'black';
paragraf.style.color = 'white';
paragraf.style.fontSize = '20px';
const buton =
  document.getElementById('btn');
buton.style.width = '100px';
buton.style.height = '30px';
buton.style.backgroundColor = 'black';
buton.style.color = 'yellow';
buton.style.fontSize = '18px';
buton.innerHTML = 'ARA';
// ======================================================
//                   GETELEMENTSBYTAGNAME()
// ======================================================
const resim =
  document.getElementsByTagName('img');
resim[0].style.width = '300px';
resim[0].style.height = '300px';
resim[1].style.border =
  ' 3px solid red';
console.log(resim[0]); //** sadece (resim) yazınca konsolda htmlCollection yapısında gösteriyor. konsolda resime ulaşmak için [0] yazdık. */
// ======================================================
//                   GETELEMENTSBYCLASSNAME()
// ======================================================
const h1 =
  document.getElementsByClassName('h1');
h1[0].style.color = 'red';
h1[0].style.textAlign = 'center';
// ======================================================
//                   QUERYSELECTOR()
// ======================================================
const baslik =
  document.querySelector('.title');
baslik.innerHTML = 'DOM Selector 👀';
const body =
  document.querySelector('#body');
body.style.backgroundImage =
  'linear-gradient(green, blue)';
// ======================================================
//                   EVENTS()
// ======================================================
//ÖRNEK-1 (Mouse Over, Mouse Out )
// ======================================================
document.querySelector(
  '.h1'
).onmouseover = function () {
  document.querySelector(
    '.h1'
  ).style.color = 'white';
  document.querySelector(
    '.h1'
  ).style.backgroundColor = 'black';
};
document.querySelector(
  '.h1'
).onmouseout = function () {
  const baslik =
    document.querySelector('.h1');
  baslik.style.color = 'red';
  baslik.style.backgroundColor =
    'transparent';
};

// ! addEvenListener()
document
  .querySelector('#btn')
  .addEventListener(
    'mouseover',
    function () {
      document.querySelector(
        '#btn'
      ).style.width = '150px';
    }
  );
document
  .querySelector('#btn')
  .addEventListener('mouseout', () => {
    document.querySelector(
      '#btn'
    ).style.width = '100px';
  });
