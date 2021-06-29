// Imports 
import { changeTitle, changeHeader, changeAboutMe } from "./manipulate.js";
import { findElementById, findFirstElementOfTag, findFirstElementOfClass, findElementsOfTag, findElementsOfClass } from "./search.js";

window.onload = () => {
    changeTitle();
    changeHeader();
    changeAboutMe();
    console.log(findElementById("header"));
    console.log(findFirstElementOfTag("LI"));
    console.log(findFirstElementOfClass("section"));
    console.log(findElementsOfTag("H3"));
    console.log(findElementsOfClass("section"));
}