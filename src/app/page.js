import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Title from "./components/title";

export default function Home() {
  return (
    <React.Fragment>
      <Title/>
      <main className="w-full flex min-h-screen flex-col scroll-smooth">
        <Main/>
        <Footer/>
      </main>
    </React.Fragment>
  )
}
