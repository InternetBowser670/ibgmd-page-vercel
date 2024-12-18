import ChangelogEl from './changelog-element';
import HomepageChangelogEl from '@/ui/changelog/changelog-element'

const versions = {
  "0.6.0": {
    "date": "12/17/24",
    "changes": "Added a changelog element and some information about my programming experience to the homepage",
    "type": "site"
  },
  "0.5.2": {
    "date": "12/16/24",
    "changes": "Finalized DB setup using MongoDB and Clerk Auth - All accounts will need to be created again",
    "type": "site"
  },
  "0.5.1": {
    "date": "12/16/24",
    "changes": "Ditched Firebase for Mongo, restyled homepage slightly, working on analytics page",
    "type": "site"
  },
  "0.5.0": {
    "date": "12/15/24",
    "changes": "Made major changes to the homapage, almost done with Firebase auth, and then after that I will be able to work on a project",
    "type": "site"
  },
  "0.4.8": {
    "date": "12/5/24",
    "changes": "Working on webhooks again",
    "type": "site"
  },
  "0.4.7": {
    "date": "12/5/24",
    "changes": "Working on webhooks",
    "type": "site"
  },
  "0.4.6": {
    "date": "12/5/24",
    "changes": "Emergency patch for auth",
    "type": "site"
  },
  "0.4.5": {
    "date": "12/4/24",
    "changes": "Working on firebase auth for future projects",
    "type": "site"
  },
  "0.4.4": {
    "date": "12/4/24",
    "changes": "Fixed a major css issue",
    "type": "site"
  },
  "0.4.3": {
    "date": "12/4/24",
    "changes": "Working on log in styles, fixed a small issue with the navbar",
    "type": "site"
  },
  "0.4.2": {
    "date": "12/4/24",
    "changes": "Changed auth to dark mode",
    "type": "site"
  },
  "0.4.1": {
    "date": "12/4/24",
    "changes": "Added another sign in button, improved auth functionality",
    "type": "site"
  },
  "0.4.0": {
    "date": "12/4/24",
    "changes": "Added an auth system - current sign in options: email, Google",
    "type": "site"
  },
  "0.3.5": {
    "date": "12/4/24",
    "changes": "Improved the changelog by sizing the elements by vw rather than vh",
    "type": "site"
  },
  "0.3.4": {
    "date": "12/4/24",
    "changes": "Improved compatibility by making certain text have more contrast with its background",
    "type": "site"
  },
  "0.3.3": {
    "date": "12/4/24",
    "changes": "Added dates to and styled the changelog",
    "type": "site"
  },
  "0.3.2": {
    "date": "12/3/24",
    "changes": "Made the changelog more consistant by sizing the change divs to a set width",
    "type": "site"
  },
  "0.3.1": {
    "date": "12/3/24",
    "changes": "Made the changelog more visible with a <br />",
    "type": "site"
  },
  "0.3.0": {
    "date": "12/3/24",
    "changes": "Vastly improved changelog, making /version obsolete",
    "type": "site"
  },
  "0.2.8": {
    "date": "12/3/24",
    "changes": "Finalized version indicator position by offsetting it upwards",
    "type": "site"
  },
  "0.2.7": {
    "date": "12/3/24",
    "changes": "Improved pfp aesthetics by adding a red border",
    "type": "site"
  },
  "0.2.6": {
    "date": "12/2/24",
    "changes": "Improved footer positioning by making it visible",
    "type": "site"
  },
  "0.2.5": {
    "date": "12/2/24",
    "changes": "Added link to this /version in /changelog",
    "type": "site"
  },
  "0.2.4": {
    "date": "12/2/24",
    "changes": "Fixed styling on /version messages",
    "type": "site"
  },
  "0.2.3": {
    "date": "12/2/24",
    "changes": "Brought back the borders on the homepage and started writing messages in /version",
    "type": "site"
  },
  "0.2.2": {
    "date": "12/2/24",
    "changes": "Changed colors for consistency",
    "type": "site"
  }
}

//----------------------------------------------------

export function LatestChangeElement() {
  // Get the first key from the versions object
  const firstKey = Object.keys(versions)[0];
  
  if (!firstKey) {
    return <p>No changelog available.</p>; // Handle the case where the versions object is empty
  }

  const firstItem = versions[firstKey as keyof typeof versions];

  return (
    <HomepageChangelogEl
      vername={firstKey}
      date={firstItem.date}
      changes={firstItem.changes}
      changeType={firstItem.type}
    />
  );
}

//-----------------------------------------------------

  

export default function ChangelogElements() {


  Object.keys(versions).forEach((key) => {
    const vername = key as keyof typeof versions;
    const changes = versions[vername].changes;
    const date = versions[vername].date;
    const changeType = versions[vername].type;


    return (
      <ChangelogEl vername={vername} date={date} changes={changes} changeType={changeType} />
    )
  });


  return(
    <>
      <div className='p-2'>
        {Object.keys(versions).map((key) => {
          const vername = key as keyof typeof versions;
          const changes = versions[vername].changes;
          const date = versions[vername].date;
          const changeType = versions[vername].type;

          return (
            <ChangelogEl
              key={vername}
              vername={vername}
              date={date}
              changes={changes}
              changeType={changeType}
            />
          );
        })}
      </div>
    </>
   
    );
}


    