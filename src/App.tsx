import React, {useState} from 'react';
import './App.css';
import {LeafletMap} from "./components/map/LeafletMap";
import {Container} from "@mui/material";
import {AppHeader} from "./components/AppHeader";
import {IMapPosition} from "./types";
import {PositionLister} from "./components/PositionLister";
import {LatLng} from "leaflet";
import {getUnixTimestamp} from "./utils";

function App() {

    const [selectedPosition, setSelectedPosition] = useState<LatLng | null>(null)
    const [positions, setPositions] = useState<IMapPosition[]>([])

    const createPosition = (position: LatLng) => {
        setSelectedPosition(null)
        setPositions([
            ...positions,
            {name: 'new position', timeStamp: getUnixTimestamp(), coords: position}
        ])
    }

    const removePosition = (timeStamp: string) => {
        setPositions(positions.filter((position) => position.timeStamp !== timeStamp))
    }

    const centerOnPosition = (position: LatLng) => {
        setSelectedPosition(position)
    }

    return (
        <div className="App">
            <Container>
                <AppHeader/>
                <LeafletMap
                    positions={positions}
                    selectedPosition={selectedPosition}
                    createPosition={createPosition}
                />
                <PositionLister
                    positions={positions}
                    removePosition={removePosition}
                    setSelectedPosition={centerOnPosition}/>
            </Container>
        </div>
    );
}

export default App;
