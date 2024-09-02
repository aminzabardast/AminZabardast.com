const PASTEL1 = '#d4afb9'
const PASTEL2 = '#d1cfe2'
const PASTEL3 = '#9cadce'
const PASTEL4 = '#7ec4cf'
const PASTEL5 = '#52b2cf'

function* rotatePastelColors() {
  while (true) {
    yield PASTEL1
    yield PASTEL2
    yield PASTEL3
    yield PASTEL4
    yield PASTEL5
  }
}

export { PASTEL1, PASTEL2, PASTEL3, PASTEL4, PASTEL5, rotatePastelColors }
