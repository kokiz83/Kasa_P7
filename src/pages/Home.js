
import Banner from "../components/Banner";
import Imobilier from "../components/Imobilier";
import imageBanner from "../assets/img/IMG.png";
import Footer from "../components/Footer";




export default function Home() {
	return (
		<>
		<main>
			<Banner image={imageBanner} title="Chez vous, partout et ailleurs" />
<Imobilier/>
		</main>
<Footer/></>
	);
}