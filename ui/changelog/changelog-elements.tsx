import ChangelogEl from './changelog-element'

export default function ChangelogElements() {
  return(
    <>
      <div className='p-2'>
        <ChangelogEl vername="0.3.0" changes="Vastly improved changelog, making /version obsolete" />
        <ChangelogEl vername="0.2.8" changes="Finalized version indicator position by offsetting it upwards" />
        <ChangelogEl vername="0.2.7" changes="Improved pfp aesthetics by adding a red border" />
        <ChangelogEl vername="0.2.6"changes="Improved footer positioning by making it visible" />
        <ChangelogEl vername="0.2.5"changes="Added link to this /version in /changelog" />
        <ChangelogEl vername="0.2.4"changes="Fixed styling on /version messages" />
        <ChangelogEl vername="0.2.3"changes="Brought back the borders on the homepage and started writing messages in /version" />
        <ChangelogEl vername="0.2.2"changes="Changed colors for consistency" />
      </div>
    </>
   
    );
}