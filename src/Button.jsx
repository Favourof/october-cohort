import "./Button.css"

function Button(props) {
    console.log(props);

    const styleBut = {
        padding: "10px 20px",
        backgroundColor: props.bg,
        color: props.color
    }
    return (
        <div>
            <button className="but" style={styleBut}>{props.text}</button>
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