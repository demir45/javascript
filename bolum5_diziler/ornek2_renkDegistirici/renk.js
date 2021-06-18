// document.querySelector('.btn').onclick =
//   function () {
//     const renkler = [
//       'AliceBlue',
//       'AntiqueWhite',
//       'Aqua',
//       'Aquamarine',
//       'Azure',
//       'Beige',
//       'Bisque',
//       'Black',
//       'BlanchedAlmond',
//       'Blue',
//       'BlueViolet',
//       'Brown',
//       'BurlyWood',
//       'CadetBlue',
//       'Chartreuse',
//       'Chocolate',
//       'Coral',
//       'CornflowerBlue',
//       'Cornsilk',
//       'Crimson',
//       'Cyan',
//       'DarkBlue',
//       'DarkCyan',
//       'DarkGoldenRod',
//       'DarkGray',
//       'DarkGrey',
//       'DarkGreen',
//       'DarkKhaki',
//       'DarkMagenta',
//       'DarkOliveGreen',
//       'DarkOrange',
//       'DarkOrchid',
//       'DarkRed',
//       'DarkSalmon',
//       'DarkSeaGreen',
//       'DarkSlateBlue',
//       'DarkSlateGray',
//       'DarkSlateGrey',
//       'DarkTurquoise',
//       'DarkViolet',
//       'DeepPink',
//       'DeepSkyBlue',
//       'DimGray',
//       'DimGrey',
//       'DodgerBlue',
//       'FireBrick',
//       'FloralWhite',
//       'ForestGreen',
//       'Fuchsia',
//       'Gainsboro',
//       'GhostWhite',
//       'Gold',
//       'GoldenRod',
//       'Gray',
//       'Grey',
//       'Green',
//       'GreenYellow',
//       'HoneyDew',
//       'HotPink',
//       'IndianRed',
//       'Indigo',
//       'Ivory',
//       'Khaki',
//       'Lavender',
//       'LavenderBlush',
//       'LawnGreen',
//       'LemonChiffon',
//       'LightBlue',
//       'LightCoral',
//       'LightCyan',
//       'LightGoldenRodYellow',
//       'LightGray',
//       'LightGrey',
//       'LightGreen',
//       'LightPink',
//       'LightSalmon',
//       'LightSeaGreen',
//       'LightSkyBlue',
//       'LightSlateGray',
//       'LightSlateGrey',
//       'LightSteelBlue',
//       'LightYellow',
//       'Lime',
//       'LimeGreen',
//       'Linen',
//       'Magenta',
//       'Maroon',
//       'MediumAquaMarine',
//       'MediumBlue',
//       'MediumOrchid',
//       'MediumPurple',
//       'MediumSeaGreen',
//       'MediumSlateBlue',
//       'MediumSpringGreen',
//       'MediumTurquoise',
//       'MediumVioletRed',
//       'MidnightBlue',
//       'MintCream',
//       'MistyRose',
//       'Moccasin',
//       'NavajoWhite',
//       'Navy',
//       'OldLace',
//       'Olive',
//       'OliveDrab',
//       'Orange',
//       'OrangeRed',
//       'Orchid',
//       'PaleGoldenRod',
//       'PaleGreen',
//       'PaleTurquoise',
//       'PaleVioletRed',
//       'PapayaWhip',
//       'PeachPuff',
//       'Peru',
//       'Pink',
//       'Plum',
//       'PowderBlue',
//       'Purple',
//       'RebeccaPurple',
//       'Red',
//       'RosyBrown',
//       'RoyalBlue',
//       'SaddleBrown',
//       'Salmon',
//       'SandyBrown',
//       'SeaGreen',
//       'SeaShell',
//       'Sienna',
//       'Silver',
//       'SkyBlue',
//       'SlateBlue',
//       'SlateGray',
//       'SlateGrey',
//       'Snow',
//       'SpringGreen',
//       'SteelBlue',
//       'Tan',
//       'Teal',
//       'Thistle',
//       'Tomato',
//       'Turquoise',
//       'Violet',
//       'Wheat',
//       'White',
//       'WhiteSmoke',
//       'Yellow',
//       'YellowGreen',
//     ];
//     const rasgele = Math.floor(
//       Math.random() * renkler.length
//     );
//     console.log(rasgele);
//     document.querySelector(
//       '.renk'
//     ).innerHTML = renkler[rasgele];
//     document.querySelector(
//       'body'
//     ).style.backgroundColor =
//       renkler[rasgele];
//     document.querySelector(
//       'h1'
//     ).style.color = renkler[rasgele];
//   };

document.querySelector('.btn').onclick =
  function () {
    let rastgele = '';
    const hex = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ];
    for (let i = 0; i < 6; i++) {
      rastgele =
        rastgele +
        hex[
          Math.floor(
            Math.random() * hex.length
          )
        ];
    }
    console.log(rastgele);
    // document.querySelector(".renk").innerHTML = renkler[rastgele];
    document.querySelector(
      'body'
    ).style.backgroundColor = rastgele;
    document.querySelector(
      'h1'
    ).style.color = rastgele;
  };
