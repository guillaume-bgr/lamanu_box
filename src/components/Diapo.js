import { Carousel } from "react-bootstrap";
import image1 from "../assets/img/box-de-stockage.jpeg";
import image2 from "../assets/img/intérieur.jpg";
import image3 from "../assets/img/extérieur.jpg";
import StyledLink from "./Link";

function Diapo() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="carousel-image d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Des locaux de stockage en plein centre d'Amiens</h3>
                    <p>70 rue des Jacobins.</p>
                    <StyledLink to="/boxes" text="Découvrir"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="overflow-hidden">
                    <img
                        className="carousel-image d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>De 2 à 16m² d'espace pour ranger ce qui vous encombre</h3>
                    <p>Des locaux entretenus et prêts a accueillir ce dont vous ne voulez plus chez vous.</p>
                    <StyledLink to="/boxes" text="Découvrir"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel-image d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>En dessous de l'établissement</h3>
                    <p>Situé dans un quartier sûr.</p>
                    <StyledLink to="/boxes" text="Découvrir"/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Diapo;