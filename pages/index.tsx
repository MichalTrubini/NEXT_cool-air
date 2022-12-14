import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../src/project/layout/layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cool Air</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <h2 style={{textAlign: 'center', fontSize: 50, marginTop: 100, marginBottom: 100}}>Here is something</h2>
        </Layout>
    </div>
  )
}

export default Home
