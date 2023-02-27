import { MongoClient, ObjectId } from "mongodb";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Layout from "../../src/project/layout/layout";
import ProductTemplate from "../../src/project/templates/productTemplate";

const ProductSingle: NextPage = ({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <ProductTemplate {...product} />
    </Layout>
  );
};

export default ProductSingle;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page: string = String(context.params!.productID);

  const URI: string = process.env.DB_URL!;

  const client = await MongoClient.connect(URI);

  const db = client.db();

  const collection = db.collection("products");
  const documents = await collection.find({ _id: new ObjectId(page) }).toArray();
  return {
    props: {
      product: JSON.parse(JSON.stringify(documents)),
    },
  };
};
