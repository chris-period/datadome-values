const element = document.createElement('div')
element.style =
  'all:unset;display:block;width:15px;height:15px;overflow:scroll;visibility:hidden; color: rgb(calc(var(--x2) + var(--x5) * var(--x1) / var(--x0) * var(--x4) - var(--x5)), calc(var(--x2) + var(--x3) * var(--x3) / var(--x4) * var(--x0) - var(--x0)), calc(var(--x4) + var(--x0) * var(--x1) / var(--x2) * var(--x3) - var(--x5))); transform: perspective(var(--x6)) rotate3d(var(--x0), var(--x1), var(--x2), var(--x7)) scale3d(var(--x3), var(--x4), var(--x5)) rotateX(var(--x8)) translateZ(var(--x6));'
document.body.appendChild(element)

const css = {
  cssS: '',
  css0: '',
  css1: '',
  cssH: ''
}

for (let x = 0; x < 9; ++x) {
  let rand = (15 * Math.random()).toFixed(2)

  css['cssS'] += rand + (8 != x ? ',' : '')
  6 == x && (rand += 'px')
  7 == x && (rand += 'deg')
  8 == x && (rand += 'turn')
  element.style.setProperty('--x' + x, rand)
}

const computedStyle = getComputedStyle(element)
css['css0'] = computedStyle.color.slice(4, -1) || 'NA'
css['css1'] = computedStyle.transform.slice(9, -1) || 'NA'
css['cssH'] = computedStyle.height || 'NA'
document.body.removeChild(element)

/*
  {
    "cssS": "8.02,6.40,7.30,12.65,11.19,1.85,2.78,1.32,1.22",
    "css0": "22, 114, 98",
    "css1": "12.648, 0.17002, -0.146866, 0.0528297, -0.00636722, 2.06986, 1.84784, -0.66469, 0.149937, -10.9947, 0.184468, -0.0663555, 0.416826, -30.5652, 0.512822, 0.815532",
    "cssH": "1.4px"
  }
*/
console.log(css);

