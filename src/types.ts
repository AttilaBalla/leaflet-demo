import {LatLng} from "leaflet";

export interface MapPosition {
    timeStamp: string,
    name: string,
    coords: LatLng
}