import { TOKEN } from '../../config'
import { DATABASE_ID } from '../../config'
import axios from "axios";
import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NoticeItemDetail from "components/notice/notice-item-detail";
import { Loader } from "semantic-ui-react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Post({ projects }) {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">공지사항(NOTICE)</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                </div>
            </div>
            <div className="container px-5 py-10 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {/* <div className="leading-relaxed">
                        <h1>No : {projects.results.length}</h1>
                    </div> */}
                    <NoticeItemDetail key={projects.id} data={projects} />
                </div>
            </div>
        </section>
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

