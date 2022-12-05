function ModifyButton(props) {
    return(
        <button className="rounded-md mx-2 p-1 bg-slate-900 text-white hover:bg-slate-500 border-none" onClick={props.handle}>{props.label}</button>
    );
}
export default ModifyButton