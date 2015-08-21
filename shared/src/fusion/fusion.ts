import Map = require("./map");
import Widget = require("./widget");

export module Fusion {
    export function initialize() {
        var map = new Map();
        var widget = new Widget();
        
        console.log("Fusion initialized");
    }
}