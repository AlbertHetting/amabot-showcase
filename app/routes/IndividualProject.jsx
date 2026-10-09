import { useLoaderData } from "react-router";

import { data } from "../data.js";

export async function clientLoader ({ params }) {
    const targetId = Number(params.id)
    const selectedBot = data.find((bot) => bot.id === targetId );
    await new Promise((resolve) => setTimeout(resolve, 500));
    return selectedBot;
}

export default function IndividualProject(){

const bot = useLoaderData();

if (!bot){
    return <h2>AMA bot er ikke fundet! Tjek linket eller rapporter fejlen</h2>
}

return (
<>
<section className="Botdetail">
    <section className="Højre">
    <h1>{bot.title}</h1>
    <div className="imageCon">
        {bot.images.map((src) => (
        <img key={src} src={src} alt={bot.title} />
        ))}
    </div>
    </section>
    <section className="Venstre">
    </section>
</section>
</>
)
}