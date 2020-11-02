import { callbackify } from "util"

const API_URL = 'https://thinkful-list-api.herokuapp.com/besker'

const getBookmarks = (callback) => {
    // get list of all bookmarks
    fetch(`${API_URL}/bookmarks`)
        .then(r=>r.json())
        .then(callback)
}

const createBookmark = (bookmark,callback) => {
    // create new bookmark with data
    const options = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify(bookmark)
    }
    fetch(`${API_URL}/bookmarks`,options)
        .then(callback)
}

const deleteBookmark = (id,callback) => {
    // delete bookmark with id
    const options = {
        method: "DELETE"
    }
    fetch(`${API_URL}/bookmarks/${id}`,options)
        .then(callback)
}

export default {
    getBookmarks,
    createBookmark,
    deleteBookmark
}