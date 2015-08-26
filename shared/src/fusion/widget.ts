/// <reference path="./event.ts" />
module Fusion {
    /**
     * Represents a component of discrete functionality in a Fusion application
     */
    export interface Widget extends EventEmittable {
        
    }
    
    /**
     * Represents a component of discrete functionality in a Fusion application
     */
    export class WidgetBase extends EventEmitter implements Widget {
        constructor() {
            super();
        }
    }
}