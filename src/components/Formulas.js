import { Card } from "react-bootstrap";

function Formulas() {
    return (
        <div className="formulas d-flex flex-wra w-100 justify-content-around align-items-stretch mt-4">
            <Card className="mx-2" style={{ width: '18rem' }}>
                <div className="square-container d-flex flex-column justify-content-center">
                    <div className="square-s"></div>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mt-2">
                        <Card.Title>Box S (2 à 3m³)</Card.Title>
                        <Card.Text>
                            Le box idéal pour ranger quelques objets personnels afin de libérer un peu d'espace chez vous.
                        </Card.Text>
                    </div>
                    {/* <div className="mt-2">
                        <Button variant="primary">Go somewhere</Button>
                    </div> */}
                </Card.Body>
            </Card>
            <Card className="mx-2" style={{ width: '18rem' }}>
                <div className="square-container d-flex flex-column justify-content-center">
                    <div className="square-m"></div>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mt-2">
                    <Card.Title>Box M (3 à 6 m³)</Card.Title>
                    <Card.Text>
                        Le box idéal pour entreposer quelques meubles encombrants.  
                    </Card.Text>
                    </div>
                    {/* <div class="mt-2">
                    <Button variant="primary">Go somewhere</Button>
                    </div> */}
                </Card.Body>
            </Card>
            <Card className="mx-2" style={{ width: '18rem' }}>
                <div className="square-container d-flex flex-column justify-content-center">
                    <div className="square-l"></div>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mt-2">
                        <Card.Title>Box L (6 à 10 m³)</Card.Title>
                        <Card.Text>
                            Le box idéal pour entreposer quelques meubles, une voiture, un vélo..
                        </Card.Text>
                    </div>
                    {/* <div class="mt-2">
                        <Button variant="primary">Go somewhere</Button>
                    </div> */}
                </Card.Body>
            </Card>
            <Card className="mx-2" style={{ width: '18rem' }}>
                <div className="square-container d-flex flex-column justify-content-center">
                    <div className="square-xl"></div>
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <div className="mt-2">
                    <Card.Title>Box XL (10 à 16 m³)</Card.Title>
                    <Card.Text>
                        Ce box est comme un appartement d'appoint, idéal pour un déménagement.
                    </Card.Text>
                    </div>
                    {/* <div className="mt-2">
                    <Button variant="primary">Go somewhere</Button>
                    </div> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Formulas;