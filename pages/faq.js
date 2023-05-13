import { TOKEN, FAQ_DATABASE_ID } from '../config';
import FaqList from '../components/faq/faq-list'


export default function Faq({faq}) {
    // console.log(faq.results)

    return (
        
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">자주 묻는 질문(FAQ)</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                </div>

                <div className="leading-relaxed">
                    <h1>FAQ : {faq.results.length}</h1>
                </div>

                <div>                    
                    {faq.results.map((aFaq) => ( <FaqList key={aFaq.id} data={aFaq} /> ))}
                </div>
                
            </div>
        </section>
        
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
                    "property": 'Question',
                    "direction": 'ascending'
                }
            ],
            page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${FAQ_DATABASE_ID}/query`, options)
    const faq = await res.json()

    // console.log(`faq: ${faq}`)

    return {
        props: {faq}, // will be passed to the page component as props
    };
}

