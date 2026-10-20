import "../Button.css"

function Button({ text = "null", bg = "black", color = "white" }) {
    // console.log(props);

    const styleBut = {
        padding: "10px 20px",
        backgroundColor: bg,
        color: color
    }
    return (
        <div>
            <button className="but" style={styleBut}>{text}</button>
        </div>
    )

}

export default Button

// function Button() {
//     const styleBut = {
//         padding: "10px 20px",
//         backgroundColor: "black",
//         color: "white"
//     }
//     return (
//         <div>
//             <button style={{
//                 padding: "10px 20px",
//                 backgroundColor: "black",
//                 color: "white"
//             }}>Submit</button>
//         </div>
//     )

// }

// export default Button