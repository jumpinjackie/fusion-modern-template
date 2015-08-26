/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./map.ts" />
/// <reference path="./widget.ts" />
/// <reference path="./event.ts" />
/// <reference path="./logger.ts" />

module Fusion {
    
    class Environment extends EventEmitter {
        constructor() {
            super();
        }
        public init(config: FusionEnvironmentConfiguration) {
            var map = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.MapQuest({layer: 'sat'})
                    })
                ],
                view: new ol.View({
                    center: ol.proj.transform([7, 51.2], 'EPSG:4326', 'EPSG:3857'),
                    zoom: 4
                })
            });
        }
    }
    
    var env = new Environment();
    
    /**
     * Configuration options for intializing Fusion
     */
    export interface FusionEnvironmentConfiguration {
        /**
         * An application definition, can be a pre-parsed ApplicationDefinition object or a resource id to one
         */
        appDef?: ApplicationDefinition | string;
    }
    
    /**
     * Registers a handler for an environment-wide event
     */
    export function registerForEvent(event: EventType, handler: EventHandler) {
        env.registerForEvent(event, handler);
    }
    
    /**
     * Initializes the Fusion application environment
     */
    export function initialize(config?: FusionEnvironmentConfiguration) {
        var done = (config: FusionEnvironmentConfiguration) => {
            env.init(config);
        };
        
        if (!config) {
            error("Need a configuration");
        } else {
            done(config);
        }
        info("Fusion initialized");
    }
}