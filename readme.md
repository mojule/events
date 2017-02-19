# mevents

Dead simple event handling for mojule

```javascript
const Events = require( 'mevents' )

// create a new instance
const events = Events()

let something

const setValue = value => {
  something = value

  // emit the event
  events.emit( 'change', value )
}

// registering a listener returns a function that removes the listener
const removeChangeListener = events.on( 'change', data => console.log( data ) )

// will call the listener
setValue( 42 )

// remove it
removeChangeListener()

// won't call the listener
setValue( 101 )
```