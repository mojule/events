# events

Dead simple event handling

## Install

`npm install @mojule/events`

```javascript
const Events = require( '@mojule/events' )

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