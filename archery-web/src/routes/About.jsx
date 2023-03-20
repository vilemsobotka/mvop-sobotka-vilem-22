import { Link } from "react-router-dom"
import { ReactSVG } from "react-svg"
function About() {
    return (
        <div className="mx-64">
            <div className="flex flex-row gap-16">
                <div>
                    <h1 className="text-target-blue text-2xl">Sportovní lukostřelba</h1>
                    <p className="text-target-light-blue w-96">
                        Sportovní lukostřelba je disciplína, která vyžaduje precizní zaměření a zručnost.
                        Závodníci se snaží zasáhnout terč co nejpřesnějším šípem z luku. Tato sportovní disciplína vyžaduje nejen fyzickou,
                        ale i psychickou sílu, trpělivost a koncentraci. Závodníci soutěží v různých kategoriích,
                        jako jsou individuální a týmové závody, a mohou se zúčastnit mezinárodních turnajů.
                        Pro mnoho lidí je lukostřelba nejen sportem, ale také relaxační aktivitou, která pomáhá zbavit se stresu a zlepšit soustředění.</p>
                </div>
                <ReactSVG className="w-80" src="/assets/target.svg" />
            </div>
            <Link to="../info"><div className="rounded-md border-2 text-target-dark-blue w-24 py-3 text-center"><p>Zjistit víc</p></div></Link>
        </div>
    )
}
export default About