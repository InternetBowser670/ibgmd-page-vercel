import ChangelogEl from './changelog-element'

export default function ChangelogElements() {
  return(
    <>
      <div className='p-2'>
        <ChangelogEl vername="0.5.2" date="12/16/24" changes="Finalized DB setup using MongoDB and Clerk Auth - All accounts will need to be created again" />
        <ChangelogEl vername="0.5.1" date="12/16/24" changes="Ditched Firebase for Mongo, restyled homepage slightly, working on analytics page" />
        <ChangelogEl vername="0.5.0" date="12/15/24" changes="Made major changes to the homapage, almost  done with Firebase auth, and then after that I will be able to work on a project" />
        <ChangelogEl vername="0.4.8" date="12/5/24" changes="Working on webhooks again" />
        <ChangelogEl vername="0.4.7" date="12/5/24" changes="Working on webhooks" />
        <ChangelogEl vername="0.4.6" date="12/5/24" changes="Emergency patch for auth" />
        <ChangelogEl vername="0.4.5" date="12/4/24" changes="Working on firebase auth for future projects" />
        <ChangelogEl vername="0.4.4" date="12/4/24" changes="Fixed a major css issue" />
        <ChangelogEl vername="0.4.3" date="12/4/24" changes="Working on log in styles, fixed a small issue with the navbar" />
        <ChangelogEl vername="0.4.2" date="12/4/24" changes="Changed auth to dark mode" />
        <ChangelogEl vername="0.4.1" date="12/4/24" changes="Added another sign in button, improved auth functionality" />
        <ChangelogEl vername="0.4.0" date="12/4/24" changes="Added an auth system - current sign in options: email, Google" />
        <ChangelogEl vername="0.3.5" date="12/4/24" changes="Improved the changelog by sizing the elements by vw rather than vh" />
        <ChangelogEl vername="0.3.4" date="12/4/24" changes="Improved compatibility by making certain text have more contrast with its background" />
        <ChangelogEl vername="0.3.3" date="12/4/24" changes="Added dates to and styled the changelog" />
        <ChangelogEl vername="0.3.2" date="12/3/24" changes="Made the changelog more consistant by sizing the change divs to a set width" />
        <ChangelogEl vername="0.3.1" date="12/3/24" changes="Made the changelog more visible with a <br />" />
        <ChangelogEl vername="0.3.0" date="12/3/24" changes="Vastly improved changelog, making /version obsolete" />
        <ChangelogEl vername="0.2.8" date="12/3/24" changes="Finalized version indicator position by offsetting it upwards" />
        <ChangelogEl vername="0.2.7" date="12/3/24" changes="Improved pfp aesthetics by adding a red border" />
        <ChangelogEl vername="0.2.6" date="12/2/24" changes="Improved footer positioning by making it visible" />
        <ChangelogEl vername="0.2.5" date="12/2/24" changes="Added link to this /version in /changelog" />
        <ChangelogEl vername="0.2.4" date="12/2/24" changes="Fixed styling on /version messages" />
        <ChangelogEl vername="0.2.3" date="12/2/24" changes="Brought back the borders on the homepage and started writing messages in /version" />
        <ChangelogEl vername="0.2.2" date="12/2/24" changes="Changed colors for consistency" />
      </div>
    </>
   
    );
}