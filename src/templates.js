const main_page = (store) => {
    return `<header>
                <h1>Bookmark App</h1>
                <div class="mainpage-buttons">
                    <button>New Bookmark</button>
                    <div class="mainpage-button-wrap">
                        <label for="mainpage-filter">Filter By</label>
                        <select id="mainpage-filter" name="mainpage-filter">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
            </header>
            <section>
                <ul class="mainpage-bookmarks-list">
                    ${bookmark_list(store)}
                </ul>
            </section>`
}

const addbookmark_page = () => {
    return `<header>
                <h1>Bookmark App</h1>
            </header>
            <form>
                <label for="addbookmark-url">Add New Bookmark</label>
                <input type="text" id="addbookmark-url" name="addbookmark-url" placeholder="https://google.com" />
                <label for="addbookmark-title">New Bookmark Title</label>
                <input type="text" id="addbookmark-title" name="addbookmark-title" placeholder="The Google" />
                <label for="addbookmark-rating">Rating</label>
                <input type="number" min=1 max=5 id="addbookmark-rating" name="addbookmark-rating" />
                <label for="addbookmark-description">Description</label>
                <textarea id="addbookmark-description" name="addbookmark-description"></textarea>
                <button>Cancel</button>
                <button type="submit">Create Bookmark</button>
            </form>`
}

const bookmark_list = (store) => {
    return store.bookmarks.map(create_bookmark).join("")
}

const create_bookmark = (bookmark) => {
    return `<li class="bookmark-item ${bookmark.expanded ? 'expanded' : ''}" id="${bookmark.id}">
                <div class="bookmark-item-title">
                    ${bookmark.title}
                </div>
                <div class="bookmark-item-button-delete">
                    <button>DELETE</button>
                </div>
                <div class="bookmark-item-rating">${bookmark.rating}</div>
                <div class="bookmark-item-link">
                    <a href="${bookmark.url}">Visit Site</a>
                </div>
                <div class="bookmark-item-description">
                    ${bookmark.description}
                </div>
            </li>`
}

export default {
    main_page,
    addbookmark_page,
    create_bookmark
}