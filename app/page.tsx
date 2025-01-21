import Navigation from "@/ui/Home/navigation/Main";
import Header from "@/ui/Home/header/Main";
import UtilsWrapper from "@/lib/wrappers/UtilsWrapper";
import About from "@/ui/Home/about/About";
import Services from "@/ui/Home/services/Main";
import OurWorks from "@/ui/Home/our-works/Main";
import Testimonials from "@/ui/Home/testimonials/Main";
import HireMe from "@/ui/Home/hire-me/Main";
import ContactUs from "@/ui/Home/contact-us/Main";
import ToTop from "@/ui/Home/shared/to-top";
import LibrariesWrapper from "@/lib/wrappers/LibrariesWrapper";
import { RepoProvider } from "@/lib/fetchs/fetchGithub";
export default function Home() {
  return (
    <>
      <RepoProvider>
        <LibrariesWrapper />
        <UtilsWrapper />
        <Navigation />
        <Header />
        <About />
        <Services />
        <OurWorks />
        <HireMe />
        <Testimonials />
        <ContactUs />
        <ToTop />
      </RepoProvider>
    </>
  );
}
