import Image from "next/image";
import Link from "next/link";

export default function ProjectsItemList({data}) {

    // const item_detail = data.url
    const title = data.properties.Name.title[0].plain_text
    // const description = data.properties.Description.rich_text[0].plain_text
    // const github = data.properties.Github.url
    // const youtube = data.properties.Youtube.url
    // const imgSrc = data.cover.file?.url || data.cover.external.url
    // const tags = data.properties.Tags.multi_select
    // const start = data.properties.WorkPeriod.date.start
    // const end = data.properties.WorkPeriod.date.end

    // console.log(`description: ${description}`)
    
    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        // console.log(`startDate: ${startDate}`)
        // console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        // console.log(`기간 : ${result}`)
        return result;
    };


    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link href={{ pathname: '/notice/[id]', query: { id: data.id } }} as={'/notice/[id]'}>
                여기로
                {/* <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"  
                    src={imgSrc}                
                    width={600}
                    height={400}
                    responsive
                    cover
                    quality={100}                
                    alt={title}
                /> */}
            </Link>
            <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        <Link href={{ pathname: '/notice/[id]', query: { id: data.id } }} as={'/notice/[id]'}>
                            {/* <a href={item_detail}><h1>{title}</h1></a> */}
                            <h1>{title}</h1>
                        </Link>
                    </h1>
                    {/* <p className="leading-relaxed mb-3">{description}</p>
                    <div className="flex items-center flex-wrap ">

                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span>

                        <div className="flex items-start mt-2">
                            <a className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" href={github}>깃허브 바로가기</a>
                        </div>
                        <div className="flex items-start mt-2">
                            <a className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" href={youtube}>유트브 시연영상 바로가기</a>
                        </div>
                        <div className="flex items-start mt-2">
                            <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                            </p>
                        </div>
                        <div className="flex items-start mt-2">
                                {tags.map((aTag) => (
                                    <h5 className="px-1 py-1 mr-1 rounded-md bg-sky-200 dark:bg-sky-700 w-300" key={aTag.id}> 
                                        {aTag.name}
                                    </h5>
                                ))}
                        </div>

                    </div> */}
            </div>
            </div>
        </div>
    )
}