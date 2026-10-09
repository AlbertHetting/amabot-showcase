import { Link } from "react-router";

export default function BotCard({ id, developer, thumbnail }) {
	return (
		<Link to={`/amabot/${id}`}>
			<article className="botcard">
				<div className="thumbnail-container">
					<img src={thumbnail} alt={`${developer}s AMAbot`} />
				</div>
				<h2>{developer}</h2>
			</article>
		</Link>
	);
}
