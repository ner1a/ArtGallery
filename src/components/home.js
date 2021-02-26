import {sectionInfo} from "../sectionInfo"
import Section from "./section"

function Home () {
    const sections = [];
    sectionInfo.forEach((e,i) => {
        sections.push(
            <Section sinfo={e} bText={e[0].title} button={e[0].malzeme} key={i}/>
        )
    });

    return<>
          <main className="main home" id="main">
            {sections} 
          </main>
    </>
}

export default Home;