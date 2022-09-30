import "./RoundedCard.css";

const RoundedCard = (props) => {
    const classes = "rounded-container " + props.className;
    return <div className={ classes } > { props.children } </div>
}

export default RoundedCard;