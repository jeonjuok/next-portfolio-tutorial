import { TOKEN } from '../../config'
import { DATABASE_ID } from '../../config'
import axios from "axios";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "components/about/projects-item-detail";
import { Loader } from "semantic-ui-react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Post({ projects }) {

    return (
        <>
            <Item key={projects.id} data={projects} />
        </>
    )
}


export async function getServerSideProps(context) {
    const id = context.params.id;
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'Notion-Version': '2022-06-28', Authorization: `Bearer ${TOKEN}`},      
        };

    const res = await fetch(`https://api.notion.com/v1/pages/${id}`, options)
    const projects = await res.json()
    
    console.log(projects);

    return {
        props: { projects } // will be passed to the page component as props
    };
}

