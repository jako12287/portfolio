"use client";
import AboutMe from "./components/aboutMe/page";
import Contact from "./components/contact/page";
import Projects from "./components/projects/page";
import Footer from "./components/share/footer";
import Header from "./components/share/header";
import Skill from "./components/skills/page";
import Studies from "./components/studies/page";

const AppContent = ({ font }: any) => {
  return (
    <body className={font.className}>
      <main>
        <Header />
        <AboutMe />
        {/*
        <Projects />
        <Skill />
        <Studies />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </body>
  );
};

export default AppContent;
