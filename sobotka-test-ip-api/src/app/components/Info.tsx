export type InfoProps = {
    as: string
    city: string
    country: string
    countryCode: string
    lat: number
    long: number
}
export default function Info(props: InfoProps) {
    return (
        <div className="grid grid-rows-n grid-flow-col">
            <p>as: {props.as}</p>
            <p>city: {props.city}</p>
            <p>country: {props.country}</p>
            <p>country code: {props.countryCode}</p>
            <p>latitude: {props.lat}</p>
            <p>longitude: {props.long}</p>
        </div>
    )
}