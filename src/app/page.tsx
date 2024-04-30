import {
  HeaderNav,
  ProfileArea,
  ProjectsSession,
  ExpertisesSession,
  ContactMe,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <ProfileArea />
      <ExpertisesSession />
      <ProjectsSession />
      <ContactMe />
    </>
  );
}
