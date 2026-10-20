import Button from "./Button"


export const Card = ({ obj }) => {
    console.log("cardObj", obj);


    const pstyle = {
        color: "white",
        fontSize: "20px"
    }
    return (
        <div className="cardContainer" style={{ padding: "20px" }}>
            <img style={{ width: "100%", }} src={obj.img} alt="" />
            <p style={pstyle}>{obj.para}</p>
            <Button bg='orange' color='blue' text={obj.buttonContent} />






        </div>
    )
}   
