import React from 'react';

class SearchBar extends React.Component
{
    //Controlled Element
    state = { term: 'Hi There!'};

    //Uncontrolled Element
    //Community Convention means that we should name it based on the eventHandler (onInputChange -> onChange for example).
    //onInputChange(event)    
    //{
        //event.target.value contains the text typed in the by the user.
        //console.log(event.target.value);
    //}

    //The reason why we use controlled elements vs uncontrolled elements is very simple.  
    //It's primarily becuase we want one place to be the key source of truth. In this case, having the value inside the state object allows us easy access (this.state.term) vs storing it inside the input tag.
    //if we did to the latter, we would need to use a JS function to reach into DOM and retrieve the value versus just reaching into the state object. It also makes severalother functions easier to access such as having
    //default text and transforming the text that is typed in inside the input tag.

    //Instance of Search Bar
    //This refers to the instance of the Search Bar outside of any functions.

    //Prevents form from automatically submitting when clicking enter.
    //How is the value of 'this' determined inside a function?
    //Anytime you want to figure out the value of this, you don't look at the function, but look at where the function is called.
    //Arrow functions make sure that the vlaue of this is always equal to the instance of the class inside the function scope.
    //It's equivalent to binding the function by doing this.onFormSubmit = this.onFormSubmit.bind(this)
    //Could also pass an arrow function directly into the prop. (event) => this.OnFormSubmit(event)
    //In this case, we do need to invoke the function as it is now an arrow function and it will be invoked whenever the form is submmitted.
    //Need arrow function to bind the correct value of this.
    onFormSubmit = (event) =>
    {
        event.preventDefault();
        //Understanding this in JS.
        //Most common error message in all React problems that we work on, so it's important that we understand it.
        //It's because this is undefined inside this function, instead of pointing to the instance of the component class.
        this.props.onSubmit(this.state.term);
    }


    render()
    {
        return(
        <div className = "ui segment">
            {/* Default form behaviour submits when you click enter */}
            {/* This is interesting. So we know when we pass parantheses to a function, we are invoking it. So in this case, onFormSubmit() would be called everytime the component is rendered.*/}
            {/* So why is it when we are calling an arrow function, we do want to pass parantheses? Ah, it seems that you want to use prantheses to call the function right here and now, versus calling it  later(storing it) */}
            <form className = "ui form" onSubmit = {this.onFormSubmit}>
                <div className = "field">
                    <label>Image Search</label>
                    {/* It's important to remember not to use parantheses when calling functions in a prop like below for onChange, as that will cause it to be called everytime render is called.
                    Instead, by passing a reference without a parantheses, it will ensure that it will be called only when the event is triggered (onChange for exampke below) Do not use parantheses whenever we pass a function to an event handler like onChange.*/}
                    {/* onChange is a special property(prop) name. There are a few others, as listed below:
                        onChange - User changes text in an input
                        onClick - User clicks on something
                        onSubmit - User submits a form */}
                    {/* Just about every JSX tag that we create will support an onClick event handler, but not every one will handle the onChange(such as a div) */}
                    {/* This will have the same functionality as our current code (onChange = {(e) => console.log(e.target.value)}) */}
                    {/* value prop overwrites whatever text is inside the input */}
                    <input type = "text" value = {this.state.term} onChange = {(e) => this.setState( {term: e.target.value} )}/>
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;
