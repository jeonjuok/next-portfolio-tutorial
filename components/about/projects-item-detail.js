import Image from "next/image";
import Link from "next/link";

export default function ProjectsItemDetail({data}) {
    
    // console.log(`description: ${data}`)

    const item_detail = data.url
    const title = data.properties.Name.title[0].plain_text
    const description = data.properties.Description.rich_text[0].plain_text
    const github = data.properties.Github.url
    const youtube = data.properties.Youtube.url
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end


    
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

        <div className="_project-card flex flex-col m-3 bg-slate-700 rounded-md">
           
            <Link href={{ pathname: '/detail/[id]', query: { id: data.id } }} as={'/detail/[id]'}>
                <Image
                    className="rounded-md"  
                    src={imgSrc}
                    
                    width={600}
                    height={400}
                    responsive
                    cover
                    quality={100}                
                    alt={title}
                />
            </Link>

            <a href={item_detail}>
                <h1>{title}</h1>
            </a>            
            <h3>{description}</h3>
            <a href={github}>깃허브 바로가기</a>
            <a href={youtube}>유트브 시연영상 바로가기</a>
            <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
            </p>
            <div className="flex items-start mt-2">
                {tags.map((aTag) => (
                    <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-300" key={aTag.id}> 
                        {aTag.name}
                    </h1>
                ))}
            </div>


        </div>
    )
}