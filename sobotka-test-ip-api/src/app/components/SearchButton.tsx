'use client'
import InfoProps from "./Info" 
interface ButtonProps {
    query: string | null
}
export default function SearchButton(props: ButtonProps) {
    return (
        <>
            <button onClick={HandleClick} className="rounded-r-md bg-lime-400 border-md hover:bg-lime-300 p-1">locate</button>
        </>
    )
}
function HandleClick(){
    
    console.log(getData(""))
}
async function getData(query: string){
    const res = await fetch('http://ip-api.com/json/' + query);
    const data: typeof InfoProps = await res.json();
    return data;
}