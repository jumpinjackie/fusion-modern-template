module Fusion {
    /**
     * Enables or disables debug logging
     */
    export var LOG_DEBUG = false;
    /**
     * Enables or disables informational logging
     */
    export var LOG_INFO = false;
    /**
     * Enables or disables error logging
     */
    export var LOG_ERROR = false;
    /**
     * Enables or disables warning logging
     */
    export var LOG_WARN = false;
    
    /**
     * Log a debug message
     */
    export function debug(msg: string) {
        if (LOG_DEBUG && typeof(console.log) == 'function')
            console.log(msg);
    }
    
    /**
     * Log an informational message
     */
    export function info(msg: string) {
        if (LOG_INFO && typeof(console.info) == 'function')
            console.info(msg);
    }
    
    /**
     * Log an error message
     */
    export function error(msg: string) {
        if (LOG_ERROR && typeof(console.error) == 'function')
            console.error(msg);
    }
    
    /**
     * Log a warning message
     */
    export function warn(msg: string) {
        if (LOG_WARN && typeof(console.warn) == 'function')
            console.warn(msg);
    }
}