import Componentizer from "lucasbarretto86.componentizer";
import logo from "../../../assets/images/gifs/run.gif"
import "./Header.scss"

export default class Header extends Componentizer {
    render() {
        return this.build("header", "", { class: "header" },
            ["img", "", { src: logo, alt: "Logo" }],
            ["h1", "Welcome to the LucasBarretto86's DOME!"]
        )
    }
}