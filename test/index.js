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

  it( 'no listeners', () => {
    const events = Events()

    assert.doesNotThrow( () => events.emit( 'change', null ) )
  })

  it( 'multiple events', () => {
    let x = 1
    let y = 2

    const events = Events()

    events.on( 'change', value => {
      x += value
    })

    events.on( 'change', value => {
      y += value
    })

    events.emit( 'change', 3 )

    assert.equal( x, 4 )
    assert.equal( y, 5 )
  })
})
