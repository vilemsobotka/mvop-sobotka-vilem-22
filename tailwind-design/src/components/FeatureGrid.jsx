import FeatureBlock from "./FeatureBlock";
function FeatureGrid(props) {
    return (
        <div className={`container mx-auto grid justify-center gap-4 ${props.isRow ? "grid-cols-3" : "sm:grid-cols-1 lg:grid-cols-2"}`}>
            {props.featureBlocks.map((block) => {
                return(<FeatureBlock isCentered={false} title={block.title} text={block.text} key={block.title}/>);
            })}
        </div>
    );
}
export default FeatureGrid;