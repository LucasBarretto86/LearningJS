import Componentizer from "lucasbarretto86.componentizer";
import { AjaxController } from "../../libs/ajax_controller"
import { Util } from "../../libs/util";

import "./Nav.scss";

export default class Nav extends Componentizer {
    constructor(props) {
        super(props)
    }

    render() {
        return this.build("nav", "", { id: "nav", class: "nav" },
            ["ul", "", {},
                ["li", "", {}, ["div", "Home", { onclick: AjaxController.get, data: { url: Util.views_path("home"), target: "main" }, class: "nav__item" }]],
                ...this.props.collections.map(collection => this.collection(collection)),
                ...this.props.links.map(link => this.item(link))
            ]
        )
    }

    collection(collection) {
        return ["li", "", {},
            ["details", "", {},
                ["summary", "", {},
                    ["div", collection.header]
                ],
                ["ul", "", {},
                    ...collection.items.map(item => this.item(item))
                ]
            ]
        ]
    }

    item(item) {
        let child = []
        if (item.request == "ajax") {
            child = ["div", item.name, { onclick: AjaxController.get, data: { url: Util.views_path(item.url) , target: "main" }, class: "nav__item" }]
        } else {
            child = ["a", item.name, { href: item.url, class: "nav__item nav__item--link" }]
        }
        return ["li", "", {}, child]
    }
}