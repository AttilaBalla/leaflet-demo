import React from "react";
import {Marker, Popup} from "react-leaflet";
import {LatLng} from "leaflet";

interface IProps {
    position: LatLng
}
export function PositionMarker(props: IProps) {

    const {position} = props;

    return(
        <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )
}