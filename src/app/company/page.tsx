'use client';

import HomeSect from "./page1";
import Page2Sect from "./page2";
import Page3Sect from "./page3";
import Page4Sect from "./page4";
import Page5Sect from "./page5";
import Page6Sect from "./page6";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeSect />
      <Page2Sect />
      <Page3Sect />
      <Page4Sect />
      <Page5Sect />
      <Page6Sect />
    </main>
  );
}
