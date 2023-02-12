import GridItem from "./GridItem"
function GridRow(props) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <GridItem text={props.l_name}/>
            <GridItem text={props.s_name}/>
            <GridItem text={props.link}/>
        </div>
    )
}
export default GridRow