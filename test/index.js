'use strict'

const assert = require( 'assert' )
const Events = require( '../src' )

describe( 'test mevents', () => {
  const Tester = () => {
    const events = Events()

    let _value = 0
    const setValue = ( value ) => {
      _value = value
      events.emit( 'change', value )
    }

    const on = events.on

    const api = {
      setValue, on
    }

    return api
  }
  let eventCount = 0
  const changeListener = ( value ) => {
    eventCount++
    console.log( `change event listener called :${value}` )
  }
  it( 'generate events', () => {
    const tester = Tester()
    const changeListenerRemove = tester.on( 'change', changeListener )
    tester.setValue( 1 )
    tester.setValue( 2 )
    changeListenerRemove()
    tester.setValue( 3 )
    assert.equal( eventCount, 2 )
  })
})
