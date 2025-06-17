const fullDay = document.getElementById('full-day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

function clock(){
    const date = new Date()
    fullDay.innerHTML = ` ${String(new Date().getDate()).padStart(2, '0')}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${new Date().getFullYear()}`;
    hour.innerHTML = date.getHours() < 10 ?  '0' + date.getHours() : date.getHours();
    minute.innerHTML = date.getMinutes() < 10 ?  '0' + date.getMinutes() :date.getMinutes();
    second.innerHTML = date.getSeconds() < 10 ?  '0' +  date.getSeconds(): date.getSeconds();
}
setInterval(clock, 1000);
clock();


const body = document.querySelector('body')
const values = [
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
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

function getGradient() {
  let color = '#'
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length)
    color += values[randomNumber]
  }

  return color
}
function setGradient() {
  const color1 = getGradient()
  const color2 = getGradient()
  const randomDeg = Math.trunc(Math.random() * 360)
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`
  body.style.background = bgColor
}
setInterval(setGradient, 3000);

