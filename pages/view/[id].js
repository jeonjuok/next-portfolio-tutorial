import Axios from "axios";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "components/Item";
import { Loader } from "semantic-ui-react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const Post = ({item}) => {
//   const router = useRouter();
//   const { id } = router.query;

//   const [item, setItem] = useState({});
//   const [loading, setLoading] = useState(true);

//   const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

//   function getData() {
//     Axios.get(API_URL).then((res) => {
//       setItem(res.data);
//       setLoading(false);
//     });
//   }

//   useEffect(() => {
//     if (id && id > 0) {
//       getData();
//     }
//   }, [id]);

//   return (

//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     > 

//       <div>
//         {loading && <Loader active > Loading.. </Loader>}
//         {!loading && (
//           <Item item={item} />
//         )}
//       </div>

//     </main>
//   )

// };

const Post = ({ item }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    > 
      {item && (
        <div>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description} />        
          </Head>
          <Item item={item} />
        </div>        
      )}    

    </main>

  )
}

export default Post;


export async function getServerSideProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(API_URL);
  const data = res.data;
  return {
    props: {
      item: data,
    },
  };
}