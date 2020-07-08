import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css'; 


const App = () => {
    
    const data = [
        {label: "Сдать анализ", important: true, id: "hehe"},
        {label: "Помыть посуду", important: false, id: "ptyu"},
        {label: "Сдать анализ", important: false, id: "powg"}
    ];

    return(
    <div className="app">
        <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}

export default App;
