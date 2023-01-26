
export default function Cards({image, title }) { //les cards de locations récupèrent les couvertures et titres en props depuis Home
	return (
		<>
		<div className="card-logement">
			<img className="imgProduct" src={image} alt="location" />
		</div>
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div></>
	);
}