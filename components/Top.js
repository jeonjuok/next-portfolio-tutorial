import { Header, Image } from 'semantic-ui-react'
import Gnb from "./Gnb";

export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20, justifyContent: "center", alignItems: "center" }}>
                <div style={{ flex: "100px 0 0"}}>
                    <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    style={{ display: "block", width: 80 }}
                    priority="true"
                    />
                </div>                
            </div>
            <Header as="h4" style={{ display: "flex", paddingTop: 5, justifyContent: "center", alignItems: "center"}}> Codding JND </Header>        

            <Gnb />
        </div>
    )
}