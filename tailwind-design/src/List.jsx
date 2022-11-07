import FeatureBlock from "./components/FeatureBlock";
function List(){
    return (<div className="mx-auto max-w-[50%]">
        <section className="m-4 md:m-8 text-gray-100">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Built to empower every team</h2>
                <p className="text-gray-400">Libero minima optio qui</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <FeatureBlock title="Title" text="bajo jajo bajo jajo bajo jajo"/>
                <FeatureBlock title="Title" text="bajo jajo bajo jajo bajo jajo"/>
                <FeatureBlock title="Title" text="bajo jajo bajo jajo bajo jajo"/>
                <FeatureBlock title="Title" text="bajo jajo bajo jajo bajo jajo"/>
            </div>
        </section>
    </div>);
}
export default List;