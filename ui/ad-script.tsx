import Script from 'next/script';

export default function AdScript() {
  return (
    <>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7456236988733866"
        crossOrigin="anonymous"
      />
    </>
  );
}
