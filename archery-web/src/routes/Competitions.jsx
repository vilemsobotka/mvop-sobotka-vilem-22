import Article from "../Article";
function Competitions() {
    return (
        <div className="mx-64">
            <h1 className="text-target-blue text-2xl mx-8">Závody</h1>
            <div className="flex flex-row gap-16">
                <Article title="Mistrovství čr" text="mistrovství české republiky v halové lukostřelbě" env="hala" date="7.1. 2027" />
                <Article title="Mistrovství čr" text="mistrovství české republiky v halové lukostřelbě" env="hala" date="7.1. 2027" />
            </div>
        </div>
    );
}
export default Competitions;