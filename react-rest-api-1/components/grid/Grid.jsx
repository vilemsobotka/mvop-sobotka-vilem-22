import GridRow from "./GridRow"
function Grid(props) {
    //console.log(props.roads)
    return (
        <div className="grid grid-cols-1 gap-4">
            {props.roads.map((road) => {
                return (
                    <GridRow key={road.road_link} l_name={road.road_long_name} s_name={road.road_short_name} link={road.road_link} />
                )
            })}
        </div>
    )

}
export default Grid