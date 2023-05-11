import { TOKEN, DATABASE_ID } from '../config'
import ProjectsItemList from '../components/about/projects-item-list'

export default function About({projects}) {

    //  console.log(projects.results)
    
    return (
        <>
            <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : {projects.results.length}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full">
            {projects.results.map((aProject) => (
                
                // 기본 코딩
                // <h1 key={aProject.id}>
                //     {aProject.properties.Name.title[0].plain_text}
                // </h1>           

                <ProjectsItemList key={aProject.id} data={aProject} />
                
            ))}

            </div>

        </>

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

            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const projects = await res.json()

    // const projectNames = projects.results.map((aProject) => (
    //     aProject.properties.Name.title[0].plain_text
    // ))

    console.log(`projectIds: ${projects}`)

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
