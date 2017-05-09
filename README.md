# KeytarHero.js
Because sometimes what you need is a simple and dumb answer, and all you can find are over-engineered pieces of crap.

So, you have an app, doodle, animation, sktech, or a game that has a constantly running `raf` cycle and you want to interact with it with your keyboard.

You -could- use the built in `keydown` event listener:

```javascript
document.addEventListener('keydown', function(e) { 
  switch(e.keyCode) {
  }
})
```
But now you not only have callbacks firing out of time-step with your art, but... how many keyCodes can -YOU- name?

Wow... uhh... that as more than I thought...

BUT STILL. WHO'S GOT TIME FOR IT?!

Presenting: ***KEYTAR HERO DOT JS***
Here's how to use it:

```javascript
// create a new isntance of KeytarHero
const keys = new KeytarHero()

//And then just grab the Keys you need by name
const {W,A,S,D, OPENBRACKET, DASH} = KeytarHero.Keys

//IT'S. SO. EASY.

function loop {
  if(keys.isDown(W)) {
    // Execute this block if W key is being pressed
  }
  if(keys.isDown(S)) {
    // Execute this block if the S key is down
  }
}

``` 

**KEYTAR HERO** uses a patented `Set` method to garauntee only one instance of key is every counted at a time. And  should
your browser lose focus... KeytarHero just lets the keys go... No muss. No Fuss. No odd behaviors because your browser things you're still holding down a key!


Order now, and you'll recieve over a 100 of the best keys of all time, including these classic favorites:

### W, A, S, D

### SPACEBAR

### F5

### CONTROL and the ALT-DELETES

### THE RETURN OF ENTER

### uhhh.... SEVEN

### DOT and SLASH

It just really doesn't get any better than this, folks


Clone now... operations are standing by.

