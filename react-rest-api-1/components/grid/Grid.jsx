import GridRow from "./GridRow"
function Grid(props) {
    //console.log(props.roads)
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                props.roads.map((road) => {
                    return (
                        <GridRow key={road.route_short_name} color={road.route_color} l_name={road.route_long_name} s_name={road.route_short_name} link={road.route_url} />
                        //console.log(road)
                    )
                })
            }
        </div>
    )

}
export default Grid