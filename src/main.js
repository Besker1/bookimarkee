import './style.css';
import store from './store';
import templates from './templates';
import api from './api';

const setupEventHandlers = () => {

// event handlers

// // add bookmark form submit (add bookmark form submit button)

// // change page to add bookmark form (add bookmark form button on main page)

// // change page to main page (add bookmark form cancel button)

// // individual bookmark item view descriptions on main page

// // filter by rating on main page

}

const render = () => {
    // run template function based on current page
    // if main render main page
    // if add render add bookmark page
    let main = document.querySelector("main");

    if ( store.page === 'main' ) main.innerHTML = templates.main_page(store); //render main page using template function templates.main_page;
    if ( store.page === 'add' )  main.innerHTML = templates.addbookmark_page();//render add bookmark page using template function templates.addbookmark_page;

}

const main = () => {
    // call the api to get list of initial bookmarks to populate the store
    // then render
    render();
}

main();