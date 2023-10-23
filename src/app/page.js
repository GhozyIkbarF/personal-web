import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col">
      <Main/>
      <Footer/>
    </main>
  )
}
