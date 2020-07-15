import { Actor } from "./actor";
import * as actors from '../actors/actors.json';

export class ApiActor extends Actor {
    constructor(name) {
        super(name);
        this.credentials = actors[name].credentials;
        this.baseUrl = actors[name].baseUrl;
    }
}