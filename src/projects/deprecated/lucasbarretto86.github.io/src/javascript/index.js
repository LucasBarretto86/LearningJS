import config from "../../config.json"
import Componentizer from "lucasbarretto86.componentizer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

class App extends Componentizer {
    render() {
        return this.build("div", "", { id: "app", class: "app" },
            new Header(),
            new Nav(config.navigation),
            new Main()
        )
    }
}

document.body.append(new App())