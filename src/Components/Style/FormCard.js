import "./FormCard.css";

const FormCard = (props) => {
    const classes = "form-container " + props.className;
    return <div className={ classes } > { props.children } </div>
}

export default FormCard;