import {useMapEvents} from "react-leaflet";
import {LatLng} from "leaflet";

interface IProps {
    createPosition: (position: LatLng) => void
}

export function PositionCreator(props: IProps) {

    const {createPosition} = props;
    const map = useMapEvents({
        click(event) {
            console.log(event)
            createPosition(event.latlng)
        },
    })

    return null
}