import {Link} from "react-router"

export default function BotCard ({ developer, thumbnail }){
    return (
		<Link>
			<article className="botcard">
				<div className="thumbnail-container">
					<img src={thumbnail} alt="Albert Showcase" />
				</div>
				<h2>{developer}</h2>
			</article>
		</Link>
	);
} 