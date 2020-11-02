import './style.css';
import store from './store';
import templates from './templates';
import api from './api';

const setupEventListeners = () => {

    // main page event listeners

    // // change page to add bookmark form (add bookmark form button on main page)
    window.addEventListener('click', (e)=>{
        if (e.target.id === 'mainpage-button-newbookmark') {
            store.page = 'add';
            render();
        }
    });

    
    // // individual bookmark item view descriptions on main page
    window.addEventListener('click', (e)=>{
        // handle button click
    });

    // // individual bookmark item view descriptions on main page
    window.addEventListener('click', (e)=>{
        // handle button click
        if (e.target.classList.contains('bookmark-item-button-delete')) {
            const id = e.target.parentNode.parentNode.id;
            api.deleteBookmark(id, ()=>{
                render();
            })
        }
    });
    
    // // filter by rating on main page
    window.addEventListener('change', (e)=>{
        // set the rating value in store
        if (e.target.id === 'mainpage-filter') {
            store.filter = Number(e.target.value);
            render();
        }
    });

    // add bookmark page event listeners

    // // change page to main page (add bookmark form cancel button)
    window.addEventListener('click', (e)=>{
        // handle button click
        if (e.target.id === 'addbookmark-cancel') {
            store.page = 'main';
            render();
        }
    });
    
    // // add bookmark form submit (add bookmark form submit button)
    window.addEventListener('submit', (e)=>{
        // handle form submit
        if (e.target.id === 'addbookmark-form') {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const title = formData.get("addbookmark-title");
            const url = formData.get("addbookmark-url");
            const desc = formData.get("addbookmark-description");
            const rating = formData.get("addbookmark-rating");
            
            const bookmark = {
                title,
                url,
                desc,
                rating
            }

            api.createBookmark(bookmark, ()=>{
                store.page = 'main';
                render();
            })
        }
    });

}

const render = () => {
    // run template function based on current page
    // if main render main page
    // if add render add bookmark page
    let main = document.querySelector("main");

    if ( store.page === 'main' ) {
        api.getBookmarks(bookmarks => {
            store.bookmarks = bookmarks;
            main.innerHTML = templates.main_page(store); //render main page using template function templates.main_page;
        });
    }
    if ( store.page === 'add' ) {
        main.innerHTML = templates.addbookmark_page();//render add bookmark page using template function templates.addbookmark_page;
    }

}

const main = () => {
    // setup event listeners
    setupEventListeners();
    // then render
    render();
}

main();