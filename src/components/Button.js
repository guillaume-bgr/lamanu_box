function StyledButton(props) {
    return (
        <button type={props.type} onClick={props.clicked} className={"button "+props.className}>{props.text}</button>
    )
}

export default StyledButton;