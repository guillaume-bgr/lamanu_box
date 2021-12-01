import { useState } from 'react';
import { Card } from 'react-bootstrap';
import furnitures from '../assets/furnitures.json';
import StyledButton from './Button';
import Fauteuil from '../assets/img/armchair.png';
import Lit from '../assets/img/bed.png';
import Armoire from '../assets/img/cabinet.png';
import Chaise from '../assets/img/chair.png';
import Commode from '../assets/img/chest.png';
import Ordinateur from '../assets/img/computer.png';
import Sofa from '../assets/img/couch.png';
import Frigo from '../assets/img/fridge.png';
import Table from '../assets/img/table.png';
import TV from '../assets/img/tv.png';
import WashMachine from '../assets/img/washmachine.png';

function HomemadeCard(props) {
    let src;

    switch(furnitures[props.type].name) {
        case "Fauteuil": 
            src = Fauteuil;
            break;
        case "Lit": 
            src = Lit;
            break;
        case "Armoire": 
            src = Armoire;
            break;
        case "Chaise": 
            src = Chaise;
            break;
        case "Commode": 
            src = Commode;
            break;
        case "Ordinateur": 
            src = Ordinateur;
            break;
        case "Sofa": 
            src = Sofa;
            break;
        case "Réfrigirateur": 
            src = Frigo;
            break;
        case "Table": 
            src = Table;
            break;
        case "Télévision": 
            src = TV;
            break;
        case "Machine à laver": 
            src = WashMachine;
            break;

    }

    return (
    <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={src} />
        <Card.Body>
            <Card.Title>{furnitures[props.type].name}</Card.Title>
            <Card.Text>
               <span className="number">{((furnitures[props.type].width*furnitures[props.type].height*furnitures[props.type].length)*Math.pow(10, -6)).toFixed(2)}</span> m³
            </Card.Text>
            <StyledButton clicked={props.clicked} text="Ajouter" />
        </Card.Body>
    </Card>
    )
}

export default HomemadeCard;