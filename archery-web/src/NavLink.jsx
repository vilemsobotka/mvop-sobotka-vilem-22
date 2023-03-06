function NavLink(props) {
    return (
        <a class="text-target-blue hover:text-target-light-blue w-full md:w-auto p-5 inline-block font-normal" href={props.link}>{props.text}</a>
    )
}
export default NavLink