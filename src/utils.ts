import axios from "axios";

export function getUnixTimestamp(): string {
    return 'id' + (new Date()).getTime();

}
export async function getMapData() {
    const response = await axios.get("http://localhost:4000/mapdata");
    return response.data;
}