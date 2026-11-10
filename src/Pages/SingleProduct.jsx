import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from 'lucide-react'
import { toast } from "@/components/ui/toast"
import { Button } from '@base-ui/react'

export const SingleProduct = () => {
    const [product, setProduct] = useState(null)
      const [loading, setLoading] = useState(false)
    const params = useParams()

    const { id } = params

    const handleSingleProduct = async () => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:4000/product/${id}`)

            if (!res.ok) {
                if (res.status === 404) {
                    toast.add({
                        title: "Not Found",
                        description: `Product with id "${id}" does not exist.`,
                        variant: "destructive",
                    });
                } else {
                    toast.add({
                        title: `Error ${res.status}`,
                        description: "Something went wrong on the server.",
                        variant: "destructive",
                    });
                }
                return;
            }

            const resJson = await res.json();
            setProduct(resJson.product);
            toast.add({
                title: resJson.status,
                description: resJson.message,
            });
        } catch (error) {
            toast.add({
                title: "Network Error",
                description: error.message,
                variant: "destructive",
            });
        }finally{
            setLoading(false)
        }
    };


useEffect(() => {
    handleSingleProduct()


}, [])


return (
    <div>
        {!product && !loading && <h1>Error getting nproduct</h1>}
       {product &&  <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
                src={product?.image}
                alt={product?.title}
                className="relative z-20 aspect-video w-full  brightness-60  "
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">${product?.price}</Badge>
                </CardAction>
                <CardTitle>{product?.title}</CardTitle>
                <CardDescription>
                    {product?.description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">Delete</Button>
            </CardFooter>
        </Card>}

        {loading && <p>Loading .......</p>}

        {/* {product && !loading? <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
                src={product?.image}
                alt={product?.title}
                className="relative z-20 aspect-video w-full  brightness-60  "
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">${product?.price}</Badge>
                </CardAction>
                <CardTitle>{product?.title}</CardTitle>
                <CardDescription>
                    {product?.description}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button className="w-full">Delete</Button>
            </CardFooter>
        </Card>: <h1>Error getting product</h1>} */}
    </div>
)
}
