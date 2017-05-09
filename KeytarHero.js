class KeytarHero {
  constructor(element = document) {
    this._downkeys = new Set()
    element.addEventListener('keydown', evt => {
      console.log('adding key:', evt.keyCode)
      this._downkeys.add(evt.keyCode)
    })
    element.addEventListener('keyup', evt => {
      console.log('removing key:', evt.keyCode)
      this._downkeys.delete(evt.keyCode)
    })
    window.addEventListener('blur', evt => {
      console.log('removing all keys')
      this._downkeys.clear()
    })
  }
  isDown(keyCode) {
    return this._downkeys.has(keyCode)
  }
}

KeytarHero.Keys = {
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  NUMZERO: 96,
  NUMONE: 97,
  NUMTWO: 98,
  NUMTHREE: 99,
  NUMFOUR: 100,
  NUMFIVE: 101,
  NUMSIX: 102,
  NUMSEVEN: 103,
  NUMEIGHT: 104,
  NUMNINE: 105,
  NUMMULTIPLY: 106,
  NUMADD: 107,
  NUMENTER: 108,
  NUMSUBTRACT: 109,
  NUMDECIMAL: 110,
  NUMDIVIDE: 111,
  NUMLOCK: 144,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  CANCEL: 3,
  BACKSPACE: 8,
  TAB: 9,
  CLEAR: 12,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPSLOCK: 20,
  ESCAPE: 27,
  SPACE: 32,
  PAGEUP: 33,
  PAGEDOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SELECT: 41,
  PRINTSCREEN: 42,
  EXECUTE: 43,
  SNAPSHOT: 44,
  INSERT: 45,
  DELETE: 46,
  HELP: 47,
  SCROLLLOCK: 145,
  EQUAL: 187,
  COMMA: 188,
  PERIOD: 190,
  SLASH: 191,
  GRAVEACCENT: 192,
  OPENBRACKET: 219,
  BACKSLASH: 220,
  CLOSEBRACKET: 221,
  APOSTROPHE: 222
}

document.addEventListener('DOMContentLoaded', () => {
  const _ua = window.navigator.userAgent
  KeytarHero.Keys.SEMICOLON = _ua.match('Firefox') ? 59 : 186
  KeytarHero.Keys.DASH = _ua.match('Firefox') ? 173 : 189
  if (
    _ua.match('Mac') &&
    (_ua.match('Safari') || _ua.match('Chrome'))
  ) {
    KeytarHero.Keys.LEFTCOMMAND = 91
    KeytarHero.Keys.LEFTWIN = 91
    KeytarHero.Keys.RIGHTCOMMAND = 93
    KeytarHero.Keys.RIGHTTWIN = 93
  } else if (_ua.match('Mac') && _ua.match('Opera')) {
    KeytarHero.Keys.LEFTCOMMAND = 17
    KeytarHero.Keys.LEFTWIN = 17
    KeytarHero.Keys.RIGHTCOMMAND = 17
    KeytarHero.Keys.RIGHTTWIN = 17
  } else if (_ua.match('Mac') && _ua.match('Firefox')) {
    KeytarHero.Keys.LEFTCOMMAND = 224
    KeytarHero.Keys.LEFTWIN = 224
    KeytarHero.Keys.RIGHTCOMMAND = 224
    KeytarHero.Keys.RIGHTTWIN = 224
  }
})
