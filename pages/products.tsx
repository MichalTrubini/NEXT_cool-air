import { NextPage } from "next";
import Layout from "../src/project/layout/layout";
import ProductSingle from "../src/project/templates/productTemplate";
import { MongoClient } from "mongodb";
import { GetServerSideProps } from 'next'
import { InferGetServerSidePropsType } from 'next'

type Data = { title: string; description: string; price: number; EAN: number; SKU: string; brand: string; category: string }

const Products: NextPage = ({products}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    return (
        <>
        <Layout>
            <ProductSingle {...products}/>
        </Layout>
        </>
    )
}

export default Products;

export const getServerSideProps: GetServerSideProps = async () => {

    const URI:string = process.env.DB_URL!;

    const client = await MongoClient.connect(URI);
  
    const db = client.db();

    const collection = db.collection('products')
    const documents = await collection.find().toArray();
    return {
        props: {
          products: JSON.parse(JSON.stringify(documents)),
        },
      };
}