const stateShowPanelPageView = (obj) => {
    debug(`stateShowPanelPageView()`)
    const page = `
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar="" class="uk-navbar">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="#">Admin Panel</a>
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a id="menu-item-users">Users</a></li>
                        <li><a id="menu-item-groups" >Groups</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="uk-section uk-section-default">
        <div id="page-content" class="uk-container"></div>
    </div>
    `

    return page
}

