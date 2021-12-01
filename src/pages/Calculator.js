import StyledButton from "../components/Button";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import Card from "../components/Card";
import HomemadeCard from "../components/Card";
import furnitures from "../assets/furnitures.json"

function Calculator() {

    const [item, setItem] = useState();
    const [needed, setNeeded] = useState(0);
    const [count, incrementCount] = useState(0);
    const [list, setList] = useState();
    const [products, setProducts] = useState();

    // const changeValue = () => {
    //     document.querySelector('.start-button')
    // }

    // const hideButton = () => {
    //     document.querySelector('.start-button').classList.add('d-none');
    //     document.querySelector('.form').classList.remove('d-none');
    // }

    const addItem = (e) => {
            localStorage.setItem(count, JSON.stringify({
                "name": e.target.previousElementSibling.previousElementSibling.innerHTML,
                "mcube": e.target.previousElementSibling.children[0].innerHTML
             }));
            incrementCount(c => c + 1);
            setNeeded(needed + (parseFloat(e.target.previousElementSibling.children[0].innerHTML)).toFixed(2));
    }

    const deleteItem = (e) => {
        setNeeded(needed - (parseFloat(e.target.previousElementSibling.children[0].innerHTML)).toFixed(2))
        e.target.parentNode.remove();
    }   

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        setItem({
            ...item,
            [name]: value
        });
    }

    const getRightContainer = () => {
        if (needed > 0 && needed < 3) {
            return "S";
        } else if (needed >=3 && needed < 6) {
            return "M";
        } else if (needed >=6 && needed < 10) {
            return "L";
        } else if (needed >=10 && needed <16) {
            return "XL";
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.width && item.length && item.height && item.name) {
            localStorage.setItem(count, JSON.stringify(item));
            incrementCount(c => c + 1);
            setNeeded((parseFloat(needed) + (item.width * item.length * item.height) * (Math.pow(10, -6))).toFixed(2));
        }
    }

    useEffect(() => {
        let itemsList = [];
        for (var i = 0; i < localStorage.length; i++) {
            itemsList.push(JSON.parse(localStorage.getItem(i)));
        }
        setList(itemsList);
    }, [count]);



    useEffect(() => {
        localStorage.clear();
        setList(null);
    }, [])

    return (
        <div className="w-100 mx-auto d-flex">
            <div className="sidebar overflow-auto">
                <p className="h4 title white mt-3 ps-2">Calculateur d'espace</p>
                <p className="mt-2 ms-2 needed text-align-center">
                    Espace nécessaire : {needed} m³
                </p>
                <p className="title white mt-3 ps-2">Derniers items ajoutés</p>
                <div id="items" className="items">
                    {
                        list ? list.map((item) => {
                            return <Item width={item.width} mcube={item.mcube} height={item.height} length={item.length} category={item.name} deleted={deleteItem} />
                        }) : ''
                    }
                </div>
            </div>
            {/* <div className="d-flex justify-content-center">
                    <StyledButton clicked=  {hideButton} className="start-button" text="Commencer le calcul"/>
                </div> */}
            <div className="calculator mx-auto d-flex justify-content-center">
                <div className="premade-items d-flex flex-wrap overflow-auto align-items-center">
                    <p className="h3 title p-3 w-100">Objets préremplis</p>
                    <HomemadeCard clicked={addItem} type="armchair" />
                    <HomemadeCard clicked={addItem}  type="bed" />
                    <HomemadeCard clicked={addItem} type="cabinet" />
                    <HomemadeCard clicked={addItem} type="chair" />
                    <HomemadeCard clicked={addItem} type="chest" />
                    <HomemadeCard clicked={addItem} type="computer" />
                    <HomemadeCard clicked={addItem} type="couch" />
                    <HomemadeCard clicked={addItem} type="fridge" />
                    <HomemadeCard clicked={addItem} type="table" />
                    <HomemadeCard clicked={addItem} type="tv" />
                    <HomemadeCard clicked={addItem} type="washmachine" />
                </div>
                <form className="ms-4" action="">
                    <div className="form mx-auto mt-4">
                        <div className="d-flex align-items-center mx-1">
                            <label htmlFor="width" className="me-1">Largeur de l'objet</label>
                            <input onChange={handleChange} type="number" name="width" id="width" className="input-n form-control" />
                            <p className="mb-1 ms-2">cm</p>
                        </div>
                        <div className="d-flex align-items-center mx-1">
                            <label htmlFor="height" className="me-1">Hauteur de l'objet</label>
                            <input onChange={handleChange} type="number" id="height" name="height" className="form-control input-n" />
                            <p className="mb-1 ms-2">cm</p>
                        </div>
                        <div className="d-flex align-items-center mx-1">
                            <label htmlFor="length" className="me-1">Longueur de l'objet</label>
                            <input onChange={handleChange} type="number" id="length" name="length" className="input-n form-control" />
                            <p className="mb-1 ms-2">cm</p>
                        </div>
                        <div className="d-flex align-items-center mx-1 mt-3">
                            <label htmlFor="nom" className="me-1">Catégorie</label>
                            <input onChange={handleChange} type="text" id="name" name="name" autoComplete="off" className="ms-2 form-control"></input>
                        </div>
                    </div>
                    <StyledButton clicked={handleSubmit} text="Ajouter" className="mt-3 mb-5" type="submit" />
                    {needed != 0 ?<p class="h4 text-center mt-5">Vous avez besoin de {needed} m³</p>: ""}
                    {needed != 0 ?<p class="h5 text-center">Le container le plus adapté est le container {getRightContainer()} </p>: ""}
                </form>
            </div>
        </div>
    )
}

export default Calculator;