import { Avatar, Card } from "flowbite-react";
import Arcticle from "../components/Arcticle";
import MyFooter from "../components/MyFooter";
import MyNav from "../components/MyNav";
import Cards from "../components/Cards";
import { useEffect, useState } from "react";


export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchproducts = (limit , offset) =>{

  fetch(`https://api.escuelajs.co/api/v1/products/?offset=${offset}&limit=${limit}`)
  .then(res=> res.json())
  .then(res=> {
    setProducts(res)
    setLoading(false)
  })
  }

  useEffect(() =>{
    fetchproducts(6,0)
 
  }, [] )
  useEffect(() =>{
    console.log("other use effect")
  }, [])
  return (
    <>
      <MyNav />
      <h1>Hello</h1>
      <main>
        <Arcticle />
        <section className="grid grid-cols-4 gap-4">
          
            {

              loading ? <h1>Loading.....</h1> :
              products.length > 0 && products.map(product => <Cards url={product.images[0]} desc={product.description}/>)
            }
          

          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
            We invest in the{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
              world’s potential
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>

          <Cards />
        </section>
      </main>
      <MyFooter />
    </>
  );
}
 