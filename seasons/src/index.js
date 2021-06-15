import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

//Class based component allows us to easily recongise going on and allows us to split the lifecycle of the app much better (allows much better code organization).
//Can use 'state' React methods.
//Allows us to use lifecycle methods

//Rules of Class Components
// - Requires use to the syntax class className extends React.Component
// - Must have some JSX that is returned inside the render() method.

//State
// Only usable with class components (for now).
// 'State' is a JS cobject that contains data relevant to a component.
// Updating State con a component cuases the component to (almost) instantly rerender (along with any child components).
// State must be intialized when a component is created. state = { lat: null, errorMessage: ''};
// State can only be updated using the function setState().

class App extends React.Component{
  //state is a JS object that has data relevant to a component. (strictly relevant)
  //update state on a component causes the component to always rerender
  //State must be initialized when a component is created
  //State can only be updated using the function setState()
  //Render method is required for every single component that we create (needs to return JSX).
  //We shouldn't initialize request inside the render method as it called repeatedly.
  //Only thing we should do here is return JSX. (The render method alone is about returning JSX)

  renderContent()
  {
    if (this.state.errorMessage && !this.state.lat )
    {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if( !this.state.errorMessage && this.state.lat )
    {
      //Whenever the App updates, the SeasonDisplay will also update. (The component will also rerender any children that it is showing as well, calling the render and componentDidUpate functions there.)
      return <div><SeasonDisplay lat = {this.state.lat}/></div>;
    }

    return <Spinner message = "Please accept location request..."/>
  }

  render()
  {
    //Always try and avoid having multiple return statements inside a render component.
    return(
      <div className = "border red">
        {this.renderContent()}
      </div>
    )
  }

  //This Function is not required by React, but it is native to the JS Language.
  //Very first function that is called whenever an instance of the class is created.
  //Makes it a good place to initialzie items that are inside the class.
  //props is the same props as before.
  //constructor(props)
  //{
    //This tells the constructor to call the default constructor inside React.Component.
    //Very similar to a SalSendClassMessage(SAM_Create, wParam, lParam)
  //  super(props);
    //Intialize the state object (with the correct keys and set a default value).
    //This is the only time we do direct assingment to this.state. Any other time we want to manipulate the state property, we need to call this.setState.
  //  this.state = { lat: null, errorMessage: '' };
  //}

  //Condense state initialization to this line of code.
  //Babel builds up your constructor for you and sets the state inside there even if you don't define the constructor.
  state = { lat: null, errorMessage: ''};

  //Called the first time the component is mounted/appears on the screen.
  //Good place to do some initial data processing, or do some one time processses.
  //Official docs say that you shouldn't do some data loading inside the constructor, better to do it inside componentDidMount() as it lets your code be more centralized (rather then splitting between constructor/componentDidMount)
  //However, I'm guessing state should still be defined inside the constructor.
  componentDidMount()
  {
    window.navigator.geolocation.getCurrentPosition( 
      position => this.setState( { lat: position.coords.latitude } ),
      error => this.setState( {errorMessage: error.message } )
      );
  }

  //anytime the component is updated, the render method is called just before it. Then componentDidUpdate is called.
  //Good place to do more data-loading when state/props change.
  componentDidUpdate()
  {
    console.log("Update acquired");
  }

  //componentWillUnmount - Good place to do cleanup(especially for non-React stuff).
  //Other lifecyle methods (rarely used) - shouldComponentUpdate/getDerivedStateFromProps/getSnapshotBeforeUpdate
}

ReactDOM.render(
    <App />,
  document.querySelector('#root')
);
