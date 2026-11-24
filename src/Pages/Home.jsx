import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// import Button from "../components/Button"
// import { Card } from "../components/Card"
import appStyle from "../App.module.css"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ThemeContext } from "@/context/ThemeContext/ThemeContext"


export const Home = () => {
    const [count, setCount] = useState(1)
    const navigate = useNavigate()
    const {theme, ToggleTheme} =useContext(ThemeContext) 

    // let counter = 0

    const handleIncrement = () => {
        setCount(count + 1)
        // counter++
        console.log(count);
    }

   

    function singlePage() {
        const navigate = useNavigate();

        const getSingleProduct = (productId) => {
            navigate(`/product/${productId}`)
        }
    }

    const [product, setProduct] = useState([])

    const [retry, setRetry] = useState('hidden');

    const handleGetAllProduct = async () => {
        try {
            const res = await fetch('http://localhost:4000/product')
            console.log(res);

            if (res.ok) {
                const resJson = await res.json()
                console.log((resJson));
                setProduct(resJson.product)
            }
        } catch (error) {
            console.log(error);

        }
    }

    
        function CardImage(image,title,description,price,id) {
        return (
            <Card  className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video " />
                <img
                    src={image}
                    alt={title}
                    className="relative z-20 aspect-video w-full  brightness-60  "
                />
                <CardHeader>
                    <CardAction>
                        <Badge variant="secondary">${price}</Badge>
                    </CardAction>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button onClick={()=> navigate(`/single/${id}`)} className="w-full">See More</Button>
                </CardFooter>
            </Card>
        )
    }


    useEffect(() => {
        handleGetAllProduct()
        const timer = setInterval(() => {
            console.log("Hello");
        }, 1000)
        return (() => clearInterval(timer))
    }, [count])



    return (
        <div >
            <h1 className={`text-2xl ${theme==="light"? "text-black": "text-red-800"}`}>Hello WOrld</h1>
            <p className="text-primary">{theme}</p>
            <button  onClick={ToggleTheme}>toggle theme</button>
            {/* {product.length < 1 && <div>
                <p>PRoduct not avaliable</p>
            <div ><Button click={handleIncrement} text="Retry"  bg='green' color='purple'  /></div>
                
                </div>} */}

            {/* <div>
                {
                    product.length !== -1 && product.map((item) => (
                        <ul>
                            <li><img src={item.image} alt="" /></li>
                            <li>{item.title}</li>
                            <li>{item.description}</li>
                            <li>{item.price}</li>
                        </ul>
                    ))
                }
            </div> */}

            <div style={{display:"grid", gap:"20px", gridTemplateColumns:"1fr 1fr 1fr"}}>
                {
                    product.length !== -1 && product.map((item)=> (
                        <div key={item._id}>
                        {CardImage(item.image, item.title.slice(0, 16), item.description.slice(0,50), item.price, item._id)}
                        </div>
                    ))
                }
            </div>
            

        </div>
    )
}
