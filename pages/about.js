import { TOKEN, DATABASE_ID } from '../config'
import ProjectsItemList from '../components/about/projects-item-list'

export default function About({projects}) {

    //  console.log(projects.results)
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Projects</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                </div>
            </div>

            <div className="container px-5 py-10 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {/* <div className="leading-relaxed">
                        <h1>No : {projects.results.length}</h1>
                    </div> */}

                    {projects.results.map((aProject) => (
                        // 기본 코딩
                        // <h1 key={aProject.id}>
                        //     {aProject.properties.Name.title[0].plain_text}
                        // </h1>           
                        <ProjectsItemList key={aProject.id} data={aProject} />
                    ))}
                </div>
            </div>

        </section>

    )
}
// 빌드 타임에 호출
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
            page_size: 21
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

// export async function getServerSideProps() {
//     const options = {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Notion-Version': '2022-06-28',
//             'content-type': 'application/json',
//             Authorization: `Bearer ${TOKEN}`
//         },
//         body: JSON.stringify({
//             sorts: [
//                 {
//                     "property": 'Name',
//                     "direction": 'ascending'
//                 }
//             ],
//             page_size: 100
//         })
//     };

//     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
//     const projects = await res.json()

//     // const projectNames = projects.results.map((aProject) => (
//     //     aProject.properties.Name.title[0].plain_text
//     // ))

//     // console.log(`projectIds: ${projects}`)

//     return {
//         props: {projects}, // will be passed to the page component as props      
//     };
// }
