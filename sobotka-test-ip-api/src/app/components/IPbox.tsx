import SearchButton from "./SearchButton"
export default function IPbox() {
    return (
        <div className="">
            <>
                <h1 className="max-w-1">IP Address:</h1>
                <input id="address" className="rounded-l-md border outline-none p-1" size={32} placeholder={"192.168.0.1"}></input>
            </>
            <SearchButton query=""></SearchButton>
        </div>
    )
}