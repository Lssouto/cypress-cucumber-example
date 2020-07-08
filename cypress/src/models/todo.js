import { Actor } from "./actor";
import * as actors from '../actors/actors.json';

export class TodoActor extends Actor {
    constructor(name) {
        super(name);
        this.buyList = actors[name].buyList;
        this.completed = actors[name].completed;
    }
}