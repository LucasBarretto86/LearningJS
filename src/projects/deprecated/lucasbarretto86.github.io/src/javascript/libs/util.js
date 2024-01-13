export const Util = {
    platform() {

    },

    app_env() {
        if (document.URL.match(/:5505/)) {
            return "dev"
        } else {
            return "prod"
        }
    },

    views_path(view) {
        if (!this.app_env() == "dev") {
            return `/${view}.html`
        } else {
            return [document.URL, `/${view}.html`].join("dist")
        }
    }
}