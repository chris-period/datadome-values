const element = document.createElement('span')
element.style.position = 'absolute'
element.style.left = '-9999px'
element.style.top = '0'
element.style.visibility = 'hidden'
element.style.fontSize = '50px'
element.style.fontFamily = 'Comic Sans MS'
element.textContent = 'mmmmmmmmmwwwwwww'
document.body.appendChild(element)
const g = element.offsetWidth

function setFont (fontName) {
  element.style.fontFamily = fontName + ', ' + 'Comic Sans MS'
  return element.offsetWidth != g
}

const fonts = [
  'Sego UI',
  'Calibri',
  'Cambria',
  'Tahoma',
  'Palatino',
  'San Francisco',
  'Helvetica Neue',
  'Apple SD Gothic Neo',
  'SF Compact Display',
  'Liberation Sans',
  'DejaVu Sans',
  'ubuntu',
  'Roboto',
  'Noto Sans',
  'Droid Sans',
  'Product Sans',
  'SimSun',
  'Microsoft YaHei',
  'Songti',
  'Kaiti',
  'PingFang',
  'Heiti',
  'SimHei',
  'PT Sans'
]

let output = ','
for (let x = 0; x < fonts.length; x++) {
  const diffOffset = setFont(fonts[x])
  if (diffOffset) output += x + ','
}
document.body.removeChild(element)

/*
  ,1,2,3,10,16,17,
*/
console.log(output)
