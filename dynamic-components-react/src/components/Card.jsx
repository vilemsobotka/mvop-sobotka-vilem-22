function Card(props) {
    return (
        <div className="rounded-md bg-slate-900 max-h-50 w-40  px-5 py-5 m-2 text-white">
            <p>Multiplicity jsou rhizomatické a demaskují arborescentní pseudomultiplicity</p>
            <p className="text-xl font-bold">{props.index}</p>
        </div>
    )
}
export default Card