import axios from 'axios';

//Create cusotmised copy of the axios client for a particular URL.
export default axios.create(
    {
        baseURL: 'https://api.unsplash.com', 
        headers:
        {
            Authorization: 'Client-ID icvDbTR9_-dm6DML6PevEOJG_C2trUl1Kq7kP9TOuJc'
        }
    });


