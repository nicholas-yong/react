import React from 'react';
//Named export means you need to use {}. Export Default means that you can just import it directly with a name.
//import { selectSong } from '/actions';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () =>
{
    return(
        <div className = "ui container grid">
            <div className = "ui row">
                <div className = "column eight wide">
                    <SongList />
                </div>
            </div>
            <div className = "column eight wide">
                <SongDetail />
            </div>
        </div>
    );
};

export default App;