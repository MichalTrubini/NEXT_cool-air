import { NextPage } from "next";
import Layout from "../src/project/layout/layout";
import ProductSingle from "../src/project/templates/productSingle";

const Product: NextPage = () => {
    return (
        <>
        <Layout>
            <ProductSingle />
        </Layout>
        </>
    )
}

export default Product;