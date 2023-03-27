function Article(props) {
    return (
        <div className="h-48 rounded-md my-8 bg-target-blue shadow-md">
            <div className="p-4">
                <h1 className="text-white text-xl">{props.title}</h1>
                <div className="text-white">
                    <p>{props.text}</p>
                    <p><b>Prostředí:</b> {props.env}</p>
                    <p><b>datum:</b> {props.date}</p>
                </div>

            </div>
        </div>
    )
}
export default Article;