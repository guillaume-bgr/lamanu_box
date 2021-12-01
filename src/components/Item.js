function Item(props) {
    return (
        <div id="items" className="items">
            <div className="item border-top border-bottom p-1">
                <p className="item__title text-light ms-1">{props.category}</p>
                {props.width ? <p className="item__size text-light ms-1 me-2 d-flex justify-content-between align-items-center"><span className="small">{props.width} x {props.length} x {props.height}</span></p> : ""}
                <p className="item__size text-light ms-1 me-2 d-flex justify-content-between align-items-center"><span className="number">{props.width ? (((props.width*props.length*props.height)*(1*Math.pow(10, -6))).toFixed(2)) : props.mcube}</span> m³</p>
                <button className="button delete-item" onClick={props.deleted} text="Supprimer">Supprimer</button>
            </div>
        </div>
    )
}

export default Item;