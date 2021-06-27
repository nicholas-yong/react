//Action creator
export const selectSong = (song) =>
{
    //Return an action
    return{
        type: 'SONG_SELECTED',
        payload: song
    };
};

//Named Export allows us to export many different functions/items from the same file.