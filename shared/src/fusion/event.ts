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
    
    export type EventHandler = (event: EventType | number, args: any) => void;
    
    class EventSubscription {
        private _id: EventType | number;
        private _handler: EventHandler;
        constructor(id: EventType | number, handler: EventHandler) {
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
        hasRegistrations(event: EventType | number): boolean;
        registerForEvent(event: EventType | number, handler: EventHandler): void;
    }
    
    /**
     * Supports registration and emitting of application-defined events
     */
    export class EventEmitter implements EventEmittable {
        private _subscriptions: { [event: number]: EventSubscription[]; };
        constructor() {
            this._subscriptions = {};
        }
        public registerForEvent(event: EventType | number, handler: EventHandler) {
            if (!this.hasRegistrations(event))
                this._subscriptions[event] = [];
            
            this._subscriptions[event].push(new EventSubscription(event, handler));
        }
        public hasRegistrations(event: EventType | number): boolean {
            return !!this._subscriptions[event];
        }
        protected trigger(event: EventType | number, args: any) {
            this._subscriptions[event].forEach((evt, i, arr) => {
                evt.raise(args);
            });
        }
    }
}