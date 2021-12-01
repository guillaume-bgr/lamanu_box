import StyledLink from "../components/Link";
import Formulas from "../components/Formulas";
import image1 from "../assets/img/calendar.png";
import image2 from "../assets/img/watch.png";


function Boxes() {
    return (
        <div className="w-75 mx-auto">
            <p className="h2 title mt-3">Nos boxes</p>
            <Formulas />
            <p className="h4 title mt-2">Pourquoi les box La Manu ?</p>
            <div className="mt-4 d-flex justify-content-between why">
                <div className="why__text d-flex flex-column align-items-center justify-content-between">
                    <div>
                        <p>
                            Les boxs la manu sont situés dans rue des Jacobins, à Amiens, dans une petite cour où se situe un restaurant et plusieurs petites écoles.
                            C'est l'un des endroits les plus calmes et tranquille du centre ville d'Amiens,
                            et est donc propice au stockage sécurisé de vos objets personnels.
                            Les locaux sont entièrement sécurisés à l'aide de détecteurs de fumée, ainsi que d'alarmes pour prévenir les éventuels vols. 
                        </p>
                        <p>
                            Nous disposons d'un ensemble varié de tailles de box disponibles à la location dès maintenant et sans engagement. De plus, vous pouvez directement voir combien d'espace vous nécessitez sur notre calculateur en ligne.
                        </p>
                    </div>
                    <StyledLink to="/calculator" text="Calculez l'espace qui vous est nécessaire" />
                </div>
                <div className="open d-flex flex-column align-items-center justify-content-around">
                    <img src={image1} alt="Hour Icon" className="w-50" />
                    <p className="h3 open__hour">24/24</p>
                    <img src={image2} alt="Day Icon" className="w-50" />
                    <p className="h3 open__hour">7j/7</p>
                </div>
                <div>
                    <div class="mapouter"><div class="gmap_canvas"><iframe title="map" width="450" height="350" id="gmap_canvas" src={"https://maps.google.com/maps?q=lamanu&t=&z=17&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br /></div></div>
                </div>
            </div>
        </div>
    );
}
export default Boxes;