/*
 * $project.fileName
 * https://github.com/seatmap/canvas Copyright 2018 Ali Sait TEKE
 */

enum BLOCK_EVENT {

}


export enum EventType {
    ADD_BLOCK = "BLOCK.ADD",
    REMOVE_BLOCK = "BLOCK.REMOVE",
    CLICK_BLOCK = "BLOCK.CLICK",
    MOUSEENTER_BLOCK = "BLOCK.MOUSEENTER",
    TOUCHSTART_BLOCK = "BLOCK.TOUCHSTART",
    MOUSEDOWN_BLOCK = "BLOCK.MOUSEDOWN",
    MOUSEUP_BLOCK = "BLOCK.MOUSEUP",
    MOUSEMOVE_BLOCK = "BLOCK.MOUSEMOVE",
    MOUSELEAVE_BLOCK = "BLOCK.MOUSELEAVE",
    UPDATE_BLOCK = "BLOCK.UPDATE",
    CLICK_SEAT = "SEAT.CLICK",
    TOUCHSTART_SEAT = "SEAT.TOUCHSTART",
    MOUSEMOVE_SEAT = "SEAT.MOUSEMOVE",
    MOUSEDOWN_SEAT = "SEAT.MOUSEDOWN",
    MOUSEENTER_SEAT = "SEAT.MOUSEENTER",
    MOUSELEAVE_SEAT = "SEAT.MOUSELEAVE",
    MOUSEOUT_SEAT = "SEAT.MOUSEOUT",
    ADD_SEAT = "SEAT.ADD",
    REMOVE_SEAT = "SEAT.REMOVE",
    ZOOM_LEVEL_CHANGE = "ZOOM_LEVEL_CHANGE",
    BOUND_CLICK = "BOUND.CLICK",

    MOUSE_MOVE = "MOUSE.MOVE",

    RESIZE_WINDOW = "WINDOW.RESIZE",

    CLICK_ZOOMOUT = "ZOOM-OUT-BG.CLICK",
    MOUSEMOVE_ZOOMOUT = "ZOOM-OUT-BG.MOUSEMOVE",

    KEYDOWN_SVG = "KEYDOWN.SEATMAP-SVG",
    KEYUP_SVG = "KEYUP.SEATMAP-SVG",

    MULTI_SELECT_ENABLE = "MULTI_SELECT_ENABLE",
    MULTI_SELECT_DISABLE = "MULTI_SELECT_DISABLE",

    BEST_AVAILABLE_ENABLE = "BEST_AVAILABLE_ENABLE",
    MBEST_AVAILABLE_DISABLE = "MBEST_AVAILABLE_DISABLE",

    READY = "READY"

}

export enum ZoomLevel {
    VENUE = "VENUE",
    BLOCK = "BLOCK",
    SEAT = "SEAT"
}

export enum SeatAction {
    HOVER = "hover",
    FOCUS = "focus",
    LEAVE = "leave",
    SELECT = "select",
    NORMAL = "normal"

}