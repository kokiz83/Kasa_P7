
import Banner from "../components/Banner";
import Imobilier from "../components/Imobilier";
import imageBanner from "../assets/img/IMG.png";



export default function Home() {
	return (
		<>
			<Banner image={imageBanner} title="Chez vous, partout et ailleurs" />
<Imobilier/>
			
		</>
	);
}