export default function Projects() {
    return (
        <>
            <div>Projects Page</div>
            <div className="project1">
                <img src="Mortana.png" id="mortana" alt="Mortana"></img>
                <h2>Mortana</h2>
                <p>
                    Mortgage based CRM containing a portal for submission and document sharing. Mortana will have do it all. Anything 
                    and everything a mortgage agent requires for handling their business, Mortana will cover. From customer relationship management
                    to tax management, a budget friendly mortgage agent admin support. Why hire an assistant, when you have Mortana. Currently being developed using
                    linux sftp servers, oracle sql DB, win-forms .NET framework. Although I plan to move it to more effecicient languages once I get good enough 
                    such as MERN. 
                </p>
            </div>
            <div className="project2">
                <img src="mortgageBySam.jpeg" id="website" alt="MortgageWebsite"></img>
                <h2>Mortgage Website</h2>
                <p>
                    website to promote services and interact with customers on the web with targeted advertisement and SEO. Currently in the planning phase. 
                </p>
            </div>
            <div className="project3">
                <img src="audiint.jpeg" id="musicAI" alt="AudioInterface"></img>
                <h2>Audio Interface Outlet</h2>
                <p>
                    Starting with only guitars, id like to build a sound outlet application that connects to an audio interface (such as garage band). 
                    This is just an idea, and nothing has been planned for it yet. More so a project being built out of curiosity, rather than a solution to a problems. 
                </p>
            </div>
        </>
    )
}