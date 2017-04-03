// Type definitions for mevents 0.2.x
// Project: https://github.com/mojule/events

declare namespace MEvents {

  /**
   * listener function.  Event subscribers pass listeners keyed to named events
   **/
  export interface listener {
    (data: any): void
  }

  /**
   * Returned by subscription function to permit unsubscription.
   */
  export interface unsubscribe {
    (): void
  }

  export interface api {
    /**
     * Expose this function on the api of the class implementing events so that listeners can subscribe to named events
     * and receive notification when the implementing class calls emit.
     * @param key - event name. (e.g. save)
     * @param listener - function to be called when event is emitted.
     * @returns function to remove listener from event instance
     */
    on: (key: string, listener: listener) => unsubscribe

    /**
     * Call this function in methods of the implementing class to trigger listeners.
     * @param key - event name. (e.g. save)
     * @param obj - some obj being operated on. (e.g. saved)
     */
    emit: (key: string, obj: any) => void
  }

  /**
   * Factory function returning instance of event api.
   */
  export function Events(): api

}

declare const mevents: MEvents

export = mevents
export as namespace MEvents
