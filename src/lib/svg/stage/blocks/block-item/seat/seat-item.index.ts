/*
 * $project.fileName
 * https://github.com/seatmap/canvas Copyright 2018 Ali Sait TEKE
 */


import SvgBase from "../../../../svg.base";
import {dom} from "../../../../../decorators/dom";
import SeatModel from "../../../../../models/seat.model";
import Seats from "../block-item.seats.index";
import {SeatItemCircle} from "./seat-item.circle";
import {CoordinateModel} from "../../../../../models/coordinate.model";
import {EventType, ZoomLevel} from "../../../../../enums/global";


@dom({
    tag: "g",
    class: "seat",
    autoGenerate: false
})
export class SeatItem extends SvgBase {

    public circle: SeatItemCircle;
    public coordinates: CoordinateModel;

    constructor(public parent: Seats, public item: SeatModel) {
        super(parent);
        this.coordinates = new CoordinateModel(item);
        this.attr("transform", "translate(" + this.coordinates.toArray() + ")");
        return this;
    }

    public select(color: string = null) {
        this.item.selected = true;
        this.node.classed("selected", true);
        this.circle.node.attr("fill",this.global.config.seat_style.selected);
    }

    public unSelect() {
        this.item.selected = false;
        this.node.classed("selected", false);
        this.circle.node.attr("fill",this.global.config.seat_style.color);
    }

    public isSelected(){
        return this.item.selected;
    }

    update(): this {
        this.circle = new SeatItemCircle(this);
        this.addChild(this.circle);
        this.updateChilds();
        return this;
    }
}