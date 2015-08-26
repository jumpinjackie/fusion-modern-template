module Fusion {
    /**
     * Models an application definition document
     */
    export interface ApplicationDefinition {
        /**
         * The title to display
         */
        Title: string;
        /**
         * The template URL
         */
        TemplateUrl: string;
        /**
         * The map set to display
         */
        MapSet: MapSet;
        /**
         * The widget set encapsulating the set of functionality for this application
         */
        WidgetSet: WidgetSet;
        /**
         * External scripts required for commerical layer integration
         */
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
    
    /**
     * Defines and activates a widget
     */
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
    
    /**
     * A set of widget references. This models a container that contains one or more references
     * to various widgets (eg. A Toolbar or Menu)
     */
    export interface WidgetContainer {
        Name: string;
        Type: string;
        Position: string;
        Extension?: any;
        Item: WidgetReference[];
    }
    
    /**
     * A reference to a widget
     */
    export interface WidgetReference {
        Function: string;
        Widget?: string;
    }
    
    export interface WidgetSettingsBase {
        
    }
}