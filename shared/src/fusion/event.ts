module Fusion {
    export enum EventType {
        /**
         * Raised when the Fusion application environment has been initialized
         */
        INITIALIZED,
        /**
         * Raised when the Fusion application environment has an unhandled error
         */
        ERROR
    }
    
    export type EventHandler = (event: EventType, args: any) => void;
    
    class EventSubscription {
        private _id: EventType;
        private _handler: EventHandler;
        constructor(id: EventType, handler: EventHandler) {
            this._id = id;
            this._handler = handler;
        }
        public raise(args: any): void {
            this._handler(this._id, args);
        }
    }
    
    /**
     * Supports registration of application-defined events
     */
    export interface EventEmittable {
        registerForEvent(event: EventType, handler: EventHandler);
    }
    
    /**
     * Supports registration and emitting of application-defined events
     */
    export class EventEmitter {
        private _subscriptions: { [event: number]: EventSubscription[]; };
        constructor() {
            
        }
        public registerForEvent(event: EventType, handler: EventHandler) {
            if (!this._subscriptions[event])
                this._subscriptions[event] = [];
            
            this._subscriptions[event].push(new EventSubscription(event, handler));
        }
        protected trigger(event: EventType, args: any) {
            this._subscriptions[event].forEach((evt, i, arr) => {
                evt.raise(args);
            });
        }
    }
}