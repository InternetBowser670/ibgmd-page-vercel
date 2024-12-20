import ProjectEl from './project-element';
import HomepageProjectEl from './homepage-project-element'

const projects = {
  "Convoes 2": {
    "date": "12/19/24",
    "desc": "Like Convoes, Convoes 2 is an only chatting service. Convoes 2 will have an updated ui and more features, releasing early 2025",
    "type": "Social",
    "status": "dev",
    "imgUrl": "/convoes-2-logo.png",
    "prjUrl": "https://convoes-2.internetbowser.com"
  },
  "Convoes": {
    "date": "8/15/24",
    "desc": "My first major online project, Convoes was an online chatting service. This project has now been deleted",
    "type": "Social",
    "status": "terminated",
    "imgUrl": undefined,
    "prjUrl": undefined
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


    