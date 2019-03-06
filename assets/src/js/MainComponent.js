import React from 'react';
import Search from './Search.js';
import Filter from './Filter.js';

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Filter />
                <ListMovie />
            </div>
        );
    }
}

export default MainComponent;
