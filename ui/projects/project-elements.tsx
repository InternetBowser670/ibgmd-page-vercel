import ProjectEl from './project-element';
import HomepageProjectEl from './homepage-project-element'

const projects = {
  "Petezah-Next": {
    "date": "5/9/25",
    "desc": "Petezah-Next is the official next generation of PeteZah Games, built with Next.js and React. It will feature a modern design and improved performance.",
    "type": "Proxy",
    "status": "dev",
    "imgUrl": "/petezah-logo-icon.png",
    "prjUrl": "https://petezah-next.vercel.app/"
  },
  "Lynx AI": {
    "date": "12/20/25",
    "desc": "Lynx AI is an AI-powered edicational tool which can be used to learn skills and other topics.",
    "type": "AI",
    "status": "dev",
    "imgUrl": "/lynx-logo-icon.png",
    "prjUrl": "https://lynx-ai-demo.com"
  },
  "Convoes 2": {
    "date": "12/19/24",
    "desc": "Like Convoes, Convoes 2 is an online chatting service. Convoes 2 has an updated ui and more features",
    "type": "Social",
    "status": "active",
    "imgUrl": "/convoes-2-logo.png",
    "prjUrl": "https://convoes-2.internetbowser.com"
  },
  "Convoes": {
    "date": "8/15/24",
    "desc": "My first major online project, Convoes was an online chatting service. This project is still available, and while Convoes 2 technically has more features, this is far less buggy.",
    "type": "Social",
    "status": "active",
    "imgUrl": undefined,
    "prjUrl": "https://convoes.internetbowser.com"
  }
}

//----------------------------------------------------

export function LatestProjectElement() {
  // Get the first key from the versions object
  const firstKey = Object.keys(projects)[0];
  
  if (!firstKey) {
    return <p>No changelog available.</p>; // Handle the case where the versions object is empty
  }

  const firstItem = projects[firstKey as keyof typeof projects];

  return (
    <HomepageProjectEl
      name={firstKey}
      date={firstItem.date}
      desc={firstItem.desc}
      prjType={firstItem.type}
      prjStatus={firstItem.status}
      imgUrl={firstItem.imgUrl}
      prjUrl={firstItem.prjUrl}
    />
  );
}

//-----------------------------------------------------

  

export default function ProjectElements() {
  return(
    <>
      <div className='p-2'>
        {Object.keys(projects).map((key) => {
          const prjName = key as keyof typeof projects;
          const changes = projects[prjName].desc;
          const date = projects[prjName].date;
          const changeType = projects[prjName].type;
          const status = projects[prjName].status;
          const prjUrl = projects[prjName].prjUrl;
          const imgUrl = projects[prjName].imgUrl
          

          return (
            <ProjectEl
              key={prjName}
              name={prjName}
              date={date}
              desc={changes}
              prjType={changeType}
              prjStatus={status}
              imgUrl={imgUrl}
              prjUrl={prjUrl}
            />
          );
        })}
      </div>
    </>
   
    );
}


    
