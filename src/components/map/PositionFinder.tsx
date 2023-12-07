import {useMap} from "react-leaflet";
import {LatLng} from "leaflet";

interface IProps {
    position: LatLng | null
}
export function PositionFinder(props: IProps) {

    const {position} = props;

    const map = useMap()
    if(position !== null) {
        map.flyTo(position)
    }

    return null;
}