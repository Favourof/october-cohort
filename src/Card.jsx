import Button from "./Button"


export const Card = () => {
    const pstyle = {
        color: "white",
        fontSize: "20px"
    }
    return (
        <div className="cardContainer" style={{ padding: "20px" }}>
            <img style={{ width: "100%", }} src="https://sqi.edu.ng/wp-content/uploads/2023/01/software-engineering-630x330-1.webp" alt="" />
            <p style={pstyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis consequuntur optio nostrum quaerat fugit maiores officia quasi cum, enim, totam debitis soluta voluptas et distinctio possimus cumque, sapiente atque explicabo!</p>
            <Button bg='orange' color='blue' text="Read more" />






        </div>
    )
}   
