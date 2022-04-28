export default async function getCoordinates(adress: string) {
    const urlEncodedAdress = encodeURIComponent(adress);
    const url = "https://nominatim.openstreetmap.org/search?format=jsonv2&q=";
    const response = await fetch(`${url}${urlEncodedAdress}`);
    const result = await response.json();
    
    return result;
}