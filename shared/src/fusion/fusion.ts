/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="./map.ts" />
/// <reference path="./widget.ts" />

interface JQuerySidebar extends JQuery {
    sidebar(): JQuerySidebar;
}

class Fusion {
    static initialize() {
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
        var sidebar = (<JQuerySidebar>$('#sidebar')).sidebar();
        console.log("Fusion initialized");
    }
}