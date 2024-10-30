export const AjaxController = {
    get() {
        let url = this.dataset.url
        let target = document.querySelector(this.dataset.target)

        fetch(url)
            .then(response => {
                return response.text();
            })
            .then(content => {
                target.innerHTML = ""
                target.innerHTML = content
            });

    }
}