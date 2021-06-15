import React, { useState ,useEffect } from 'react';
import axios from 'axios';

const Search = () =>
{
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    //useEffect for term
    useEffect( () =>
    {
        const timerId = setTimeout(() =>
        {
            setDebouncedTerm(term);
        }
        , 1000);

        return () =>
        {
            clearTimeout(timerId);
        }
    }, [term]);


    useEffect( () =>
    {
        const search = async () => 
        {
            const {data} = await axios.get( 'https://en.wikipedia.org/w/api.php',
            {
                params:
                {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            })

            setResults(data.query.search);
        };

        search();

    }, [debouncedTerm]);



    //useEffect hook allow functional components to use something like lifecycle methods.
    //We can configure the hook to run some code automatically in one of three scnearios:
    //1. When the component is rendered for the first time only
    //2. When the component is rendered for the first time and whenever it rerenders.
    //3. When the component is rendered for the first time (and whenever it rerenders and some piece of data has changed).
    //useEffect(() =>
    //{
        //Need to configure it to tell it when the code should be executed.
        //Second arg controls when the code is executed.
        //Second arg can be empty or or more elements inside of it or nothing. (No arg, empty array or array with terms inside of it).
        //Empty Array [] == Run the Arrow Function at initial render.
        //No Array == Run at initial render and run after every rerender.
        //[data] == Run at initial render and run after every rerender if data has changed since last render. (Note that if there is more than one term in the array, the function will run if either one changes (not both)).
        //Use Effect has a requirement in that the function being passed cannot be marked with async and await cannot be used inside that function.

        //Instead, there are three different ways to get around it.

        //Method One
        //We can make it a temporary helper function inside the calling function.
        //const search = async () => {
        //    await axios.get('test')
        //}
        //Then call the search function after that.
        //search()

        //Method Two (Remove the temporary variable)
        //(async() =>
        //    await axios.get('test')
        //})();
        //While the above syntax looks strange, it essentially just means that we are creating a function and immediately invoking it. (Hence the () at the end). I guess this is a much more stylistic way of writing it.
        //As per the course, this method of coding is not much more performance efficient as the overhead of creating a variable is miniscule. So it's used more for its aesthethic benefits.

        //Method Three (Use Normal Promises)
        //axios.get('Test').then((response) => {console.log(response.data);})
        //The only thing that we are allowed to return is another function(a cleanup function)
        //return () => {console.log('Cleanup')}
        //This is run BEFORE the other code inside useEffect is actually called. (The cleanup function from the last time around).
        //Next time we renrender, the cleanup function provided is first invokved, then the function provided to useEffectis called again. (cleanup function is not called in the initial render).
        


        //Anytime youi refer to a prop or a piece of state in a hook, you need to reference that piece of state/prop inside the array used to decide when to rerun the useEffect function. (second param).
    //}, [term, results.length]);

    const renderedResults = results.map( ( result ) =>
    {
        return(
            <div key = {result.pageid} className = "item" >
                <div className = "right floated content">
                    <a className = "ui button" href = {`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className = "content">
                    <div className = "header">
                        {result.title}
                    </div>
                    {/* Special Feature could be introducing a security hole called an XSS attack. (Rendering HTML from an untrusted source). */}
                    {/* Have to be really careful when using this, make sure that you trust the source */}
                    <span dangerouslySetInnerHTML = {{__html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    //Add in some code to detect that the component has re-rendered and the term state has been changed.
    return (
        <div>
            <div className = "ui form">
                <div className = "field">
                    <label>Enter Search Term</label>
                    <input onChange = {e => setTerm(e.target.value)} value = {term} className = "input"/>
                </div>
            </div>
            <div className = "ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;