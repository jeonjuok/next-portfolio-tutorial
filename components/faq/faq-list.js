import Link from "next/link";

export default function FaqList({data}) {

    const question = data.properties.Question.title[0].plain_text
    const answer = data.properties.Answer.rich_text[0].plain_text
    const WDate = data.properties.WDate.created_time
    const Writer = data.properties.Writer.created_by.object
    
    
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-8 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        {/* <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-gray-700">{Writer}</span>
                            <span className="mt-1 text-gray-500 text-sm">{ WDate }</span>
                        </div>                         */}
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{question}</h2>
                            <p className="leading-relaxed">{answer}</p>
                            <Link href={{ pathname: '/detail/[id]', query: { id: data.id } }} as={'/detail/[id]'}>
                                <p className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </p>
                            </Link>
                        </div>
                    </div>           

                </div>
            </div>
        </section>
    )
}