import Baizi from "./BaiziJournal.png";
import Country from "./CountryGame.png";
import Tribute from "./TributePage.png";
import RGB from "./RGB.png";

export const projects = [
  {
    title: "“百炼成钢” Baizi Journal App",
    description:
      '"Baizi" means "100 letters" in Chinese. This full stack minimalist journal app promps user to write a 100-letter journal everyday - not one letter more, not one letter less.',
    stacks: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
    image: Baizi,
    github: "https://github.com/XiaoheLiu/baizi-journal-front-end"
  },
  {
    title: "Country Flag Guessing Game",
    description:
      "An educative game that asks the player to guess which country the displayed country flag corresponds to. The country data are fetched from the REST country API.",
    stacks: ["ReactJS", "Axios"],
    image: Country,
    github: "https://github.com/XiaoheLiu/country-guessing-game",
    demo: "https://guess-country-flag.herokuapp.com/"
  },
  {
    title: "RGB Color Guessing Game",
    description:
      "Find the square that has the color of the given RGB value. A game built with vanilla JS with a smooth UX.",
    stacks: ["JavsScript", "HTML5", "CSS3"],
    image: RGB,
    github: "https://github.com/XiaoheLiu/Johannes-Vermeer-Tribute-Page",
    demo: "https://codepen.io/sd_athena/full/NEyeWz/"
  },
  {
    title: "Johannes Vermeer Tribute Page",
    description:
      "A tribute page to the Dutch painter Johannes Vermeer in the 17th century.",
    stacks: ["HTML5", "CSS3"],
    image: Tribute,
    github: "https://github.com/XiaoheLiu/Johannes-Vermeer-Tribute-Page",
    demo: "https://codepen.io/sd_athena/full/dqLBMb/"
  }
];
