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
            {/* <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : {projects.results.length}</h1> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full">
            {/* {projects.results.map((aProject) => ( */}
                
                {/* // 기본 코딩
                // <h1 key={aProject.id}>
                //     {aProject.properties.Name.title[0].plain_text}
                // </h1>            */}

                <Item key={projects.id} data={projects} />
                
            {/* ))} */}

            </div>

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

