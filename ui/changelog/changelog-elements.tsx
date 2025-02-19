import ChangelogEl from './changelog-element';
import HomepageChangelogEl from './homepage-changelog-element'
import React from 'react';

const versions = {
  "1.9.0": {
    "date": "2/18/25",
    "changes": "Redid the homepage again",
    "type": "site"
  },
  "1.8.0": {
    "date": "1/20/25",
    "changes": "Redid the rest of the homepage",
    "type": "site"
  },
  "1.7.0": {
    "date": "1/20/25",
    "changes": "Redid the 'hero' section of the page to make it look nicer",
    "type": "site"
  },
  "1.6.0": {
    "date": "1/13/25",
    "changes": "Changed the donate link to https://buymeacoffee.com/internetbowser",
    "type": "site"
  },
  "1.5.2": {
    "date": "12/26/24",
    "changes": "Slightly rearranged the homepage",
    "type": "site"
  },
  "1.5.1": {
    "date": "12/23/24",
    "changes": "Improved navbar logic",
    "type": "site"
  },
  "1.5.0": {
    "date": "12/23/24",
    "changes": "Made all new users have a default description",
    "type": "site"
  },
  "1.4.0": {
    "date": "12/22/24",
    "changes": "Made the settings page display some text if you are not signed in",
    "type": "site"
  },
  "1.3.0": {
    "date": "12/22/24",
    "changes": "Changed the navbar to use icons rather than text",
    "type": "site"
  },
  "1.2.0": {
    "date": "12/22/24",
    "changes": "Added user API and settings page",
    "type": "site"
  },
  "1.1.1": {
    "date": "12/19/24",
    "changes": "Restyled projects slightly",
    "type": "site"
  },
  "1.1.0": {
    "date": "12/19/24",
    "changes": "Added 'contact me' links",
    "type": "site"
  },
  "1.0.0": {
    "date": "12/19/24",
    "changes": "Added projects, the final feature neccessary to complete the initial development of the site",
    "type": "site"
  },
  "0.6.2": {
    "date": "12/19/24",
    "changes": "Made a big mistake with npm, should be fixed now",
    "type": "site"
  },
  "0.6.1": {
    "date": "12/17/24",
    "changes": "Made the changelog element on the homepage have slightly different stylization than the ones on the /changelog page",
    "type": "site"
  },
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


    
