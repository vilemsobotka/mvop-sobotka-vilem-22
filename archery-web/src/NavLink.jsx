import { Link } from "react-router-dom"
function NavLink(props) {
    return (
        <Link className="text-target-blue hover:text-target-light-blue w-full md:w-auto p-5 inline-block font-normal" to={props.link}>{props.text}</Link>
    )
}
export default NavLink