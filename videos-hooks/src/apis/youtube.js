import axios from 'axios';


const KEY = 'AIzaSyAXFc50wh-rwVNS972AbyfXHRIJnGUoiek';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:
    {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
