function HeaderLinks(props) {
    const links = [
        {
            label: "home",
            url: "#"
        },
        {
            label: "about",
            url: "#"
        },
        {
            label: "contacts",
            url: "#"
        },
    ]
    return (
        <ul className="items-stretch hidden space-x-3 lg:flex">
            {links.map((link) => {
                return(<li key={link.label} className="flex"><a rel="noopener noreferrer" href={link.url} className={`flex items-center px-4 ${props.current == link.label ? "-mb-1 border-b-2 text-reactcolor border-reactcolor " : "text-gray-900"}`}>{link.label}</a></li>);
            })}
        </ul>
    );
}
export default HeaderLinks;