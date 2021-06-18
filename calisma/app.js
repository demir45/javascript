document
  .querySelector('.btn')
  .addEventListener('click', () => {
    const renkler = [
      'AliceBlue',
      'AntiqueWhite',
      'Aqua',
      'Aquamarine',
      'Azure',
      'Beige',
      'Bisque',
      'Black',
      'BlanchedAlmond',
      'Blue',
      'BlueViolet',
      'Brown',
    ];
    const rasgele = Math.floor(
      Math.random() * renkler.length
    );
    document.querySelector(
      'body'
    ).style.backgroundColor =
      renkler[rasgele];
    console.log(
      Math.floor(
        Math.random() * renkler.length
      )
    );
  });
