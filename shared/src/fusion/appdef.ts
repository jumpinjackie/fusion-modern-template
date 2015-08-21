module Fusion {
    export interface ApplicationDefinition {
        Title: string;
        TemplateUrl: string;
        MapSet: MapSet;
        WidgetSet: WidgetSet;
        Extension?: CommericalLayerOptions;
    }
    
    export interface CommericalLayerOptions {
        VirtualEarthScript?: string;
        GoogleScript?: string;
        OpenStreetMapScript?: string;
        StamenScript?: string;
    }
    
    export interface MapSet {
        MapGroup: MapGroup[];
    }
    
    export interface MapGroup {
        id: string;
    }
    
    export interface MapGroupItem {
        Type: string;
        SingleTile: boolean;
        Extension?: MapItemOptions;
    }
    
    export interface MapItemOptions {
        
    }
    
    export interface GenericOptions extends MapItemOptions {
        Options: GenericLayerOptions;
    }
    
    export interface GenericLayerOptions {
        name: string;
        type: string;
    }
    
    export interface MapGuideOptions extends MapItemOptions {
        ResourceId: string;
        Options: MapGuideLayerOptions;
        SelectionAsOverlay: boolean;
        SelectionColor: string;
    }
    
    export interface MapGuideLayerOptions {
        isBaseLayer: boolean;
        useOverlay: boolean;
        projection: string;
    }
    
    export interface WidgetSet {
        Container: WidgetContainer[];
        MapWidget: MapWidgetSettings;
        Widget: WidgetDefinition[];
    }
    
    export interface MapWidgetSettings {
        Name: string;
        Type: string;
        Extension?: any;
        MapId: string;
    }
    
    export interface WidgetDefinition {
        Name: string;
        Type: string;
        Location?: string;
        Extension?: WidgetSettingsBase;
        ImageUrl?: string;
        ImageClass?: string;
        Label: string;
        Tooltip: string;
        StatusText?: string;
        Disabled: boolean;
    }
    
    export interface WidgetContainer {
        Name: string;
        Type: string;
        Position: string;
        Extension?: any;
        Item: WidgetReference[];
    }
    
    export interface WidgetReference {
        Function: string;
        Widget?: string;
    }
    
    export interface WidgetSettingsBase {
        
    }
}