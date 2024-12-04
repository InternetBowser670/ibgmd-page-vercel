import ChangelogEl from './changelog-element'

export default function ChangelogElements() {
  return(
    <>
      <div className='p-2'>
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