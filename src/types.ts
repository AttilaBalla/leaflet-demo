import {LatLng} from "leaflet";

export interface IMapPosition {
    timeStamp: string,
    name: string,
    coords: LatLng
}

export interface IMarker {
    name: string,
    position: {
        lat: number,
        lng: number
    }
    icon: string
}