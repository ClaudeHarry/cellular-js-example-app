const stateShowUsersPagePresenter = async () => {
    debug(`stateShowUsersPagePresenter()`)
    const model = await stateShowUsersPageModel()
    const view = await stateShowUsersPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
        stateShowUsersPageShowFilters()
    })

    waitForElement({ "selector": "tr#last-row" }, () => {

        document.querySelectorAll('td.editable-cell').forEach((tdEditable) => {
            tdEditable.childNodes[3].addEventListener('click', () => {
                stateShowUsersPageShowModal(tdEditable)
            })
        })

        document.querySelectorAll('td[role="delete"]').forEach((tdDelete) => {
            tdDelete.childNodes[1].addEventListener('click', () => {
                stateShowUsersPageShowModal(tdDelete)
            })
        })

    })


}

