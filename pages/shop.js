import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../components/shop/ItemList";
//import styles from "../styles/Home.module.css";
import { Inter } from "next/font/google";

// import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

const API_URL =
"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

export default function Shop() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    > 
      <div>
        <Head>
          <title>HOME | 코딩앙마</title>
        </Head>
        
        {loading && <Loader active > Loading.. </Loader>}
        {!loading && (
          <div>
            <Header as="h3" style={{ paddingTop: 40 }}>
              베스트 상품
            </Header>
            <Divider />
            <ItemList list={list.slice(0, 9)} />
            <Header as="h3" style={{ paddingTop: 40 }}>
              신상품
            </Header>
            <Divider />
            <ItemList list={list.slice(9)} />      
          </div>    
        )}
      </div>
    </main>
  );
}