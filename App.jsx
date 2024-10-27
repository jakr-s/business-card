import ProfilePicture from "./components/ProfilePicture";
import BasicInfo from "./components/BasicInfo";
import ContactLinks from "./components/ContactLinks";
import AboutMe from "./components/AboutMe";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="app-container">
      <ProfilePicture />
      <BasicInfo />
      <ContactLinks />
      <AboutMe />
      <Socials />
    </div>
  );
}
