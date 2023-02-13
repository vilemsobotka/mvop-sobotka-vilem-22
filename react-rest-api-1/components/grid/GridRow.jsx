import GridItem from "./GridItem"
function GridRow(props) {
    return (
        <a href={props.link}>
            <div className={`gap-4 rounded-md text-white`} style={{
                backgroundColor: `#${props.color}`
            }}>
                <GridItem text={props.l_name} />
                <GridItem text={props.s_name} />
            </div>
        </a>
    )
}
export default GridRow