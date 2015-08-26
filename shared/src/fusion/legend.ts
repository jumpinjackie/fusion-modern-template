/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./widget.ts" />

module Fusion {
    export interface LegendWidget extends Widget {
        
    }
    
    class Legend extends WidgetBase implements LegendWidget {
        constructor() {
            super();
        }
    }
}