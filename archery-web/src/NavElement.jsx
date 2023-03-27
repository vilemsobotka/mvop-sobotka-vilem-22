import { NavLink } from "react-router-dom"
function NavElement(props) {
    return (
        <NavLink className="text-target-blue hover:text-target-light-blue w-full md:w-auto p-5 inline-block font-normal" to={props.link}>{props.text}</NavLink>
    )
}
export default NavElement