import Componentizer from "lucasbarretto86.componentizer";
import { AjaxController } from "../../libs/ajax_controller"
import { Util } from "../../libs/util";

import "./Main.scss"

export default class Main extends Componentizer {
    render() {
        return this.build("main", "", { })
    }
}