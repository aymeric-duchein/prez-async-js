function goFullScreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.msRequestFullscreen) {
    document.body.msRequestFullscreen();
  } else if (document.body.mozRequestFullScreen) {
    document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) {
    document.body.webkitRequestFullscreen();
  }
}

document.getElementById('navigation').insertAdjacentHTML('beforeend', '<a onclick="goFullScreen()" style="position: absolute;top:2.4rem;right: -2rem;border-radius: .4rem;cursor: pointer;font-size: 2.4rem;height: 4rem;padding: .8rem;position: absolute;text-align: center;width: 4rem;"><svg style="cursor: pointer;" class="fa-arrows-alt"><use xlink:href="#fa-arrows-alt"></use></svg></a>');
const collection = document.getElementsByTagName('section');
for (let i = 0; i < collection.length; i++) {
  let elm = collection.item(i);
  elm.insertAdjacentHTML('beforeend', `<span class="background" style="background-image:url(\'static/images/bg.jpg\')"></span>\n<svg style="cursor: pointer;" class="fa-arrows-alt"><use xlink:href="#fa-arrows-alt"></use></svg></a>`);
}

function testSetTimeout() {
  let str = '// Bonjour, ';
  setTimeout(() => str += 'je m\'appelle ');
  str += 'Yoda ';

  setTimeout(() =>
    document.getElementById('setTimeoutEx').insertAdjacentHTML('beforeend', str + '\n'), 0
  )
}

function resetSetTimeout() {
  document.getElementById('setTimeoutEx').innerHTML = '';
}

function testPromise() {
  let str = 'Seize ';
  new Promise(r => r('sèches '))
  .then(v => str += v);
  str += 'chaises ';

  setTimeout(() =>
    document.getElementById('promiseEx').insertAdjacentHTML('beforeend', str + '\n'), 0
  )
}

function resetPromise() {
  document.getElementById('promiseEx').innerHTML = '';
}

function testPromise2() {
  let str;
  setTimeout(() => str = !str ? 'l\'homme qui prend ': str + 'l\'homme');
  new Promise(r => r('la mer '))
  .then(v => str = !str ? v + 'qui prend ': str + v);

  setTimeout(() =>
    document.getElementById('promise2Ex').insertAdjacentHTML('beforeend', str + '\n'), 0
  )
}

function resetPromise2() {
  document.getElementById('promise2Ex').innerHTML = '';
}

var display = 0;
function displayBlink() {
  display++;
  document.getElementById('blinker').style.display = display < 30? 'inline':'none';
  display = display > 60 ? 0: display;
  requestAnimationFrame(() => displayBlink());
}

function testRaf() {
  let strRaf = '';
  setTimeout(() => strRaf += 'General ');
  requestAnimationFrame(() => strRaf += 'Kenobi ');
  new Promise(r => r('there! '))
  .then(v => strRaf += v);
  strRaf += 'Hello ';

  setTimeout(() =>
    document.getElementById('rafEx').insertAdjacentHTML('beforeend', strRaf + '\n'), 100
  )
}
function testRafx10() {
  for(let i= 0;i<10;i++) {
    testRaf();
  }
}
function resetRaf() {
  document.getElementById('rafEx').innerHTML = '';
}

function promiseLoop() {
  Promise.resolve().then(promiseLoop);
}
