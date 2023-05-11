import { TOKEN, DATABASE_ID } from '../../config'
import Axios from "axios";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "components/projects/projects-item-detail";
import { Loader } from "semantic-ui-react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Post({ item }) {

    // console.log(item);

    return (
        <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        > 
        <div>여기는 detail/[id].js</div>

        {item && (
            <div>
            <Head>
                <title>{item}</title>
                <meta name="description" content={item.description} />        
            </Head>

            <Item item={item} />

            </div>        
        )}    

        </main>

    )
}




export async function getServerSideProps() {
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": 'Name',
                    "direction": 'ascending'
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    // const projectNames = projects.results.map((aProject) => (
    //     aProject.properties.Name.title[0].plain_text
    // ))

    // console.log(`projectIds: ${projects}`)

    return {
        props: {projects}, // will be passed to the page component as props      
    };
}
