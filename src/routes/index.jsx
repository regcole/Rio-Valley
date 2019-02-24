import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import HelpUsPage from "views/HelpUsPage/HelpUsPage.jsx";

var indexRoutes = [
  { path: "/about-us", name: "AboutUsPage", component: AboutUsPage },
  { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
  { path: "/help-us", name: "HelpUsPage", component: HelpUsPage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/", name: "HomePage", component: LandingPage }
];

export default indexRoutes;
