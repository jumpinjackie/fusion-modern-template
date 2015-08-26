/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./widget.ts" />

module Fusion {
    /**
     * An interactive map viewer component
     */
    export interface MapWidget extends Widget {
        
    }
    
    class Map extends WidgetBase implements MapWidget {
        private _map: ol.Map;
        constructor() {
            super();
        }
    }
}