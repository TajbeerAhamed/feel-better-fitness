import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='answers'>
            <h1 className='question'>How Does React Works?</h1>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. While building client-side apps, a team of Facebook developers realized that the DOM is slow  is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
<h1 className='question'>Differences between props and State?</h1>
<p>Props: Props are read-only.Props are immutable.Props allow you to pass data from one component to other components as an argument.Props can be accessed by the child component.Props are used to communicate between components.Props are external and controlled by whatever renders the component. <br />
State:State changes can be asynchronous.State is mutable.State holds information about the components.State cannot be accessed by child components.States can be used for rendering dynamic changes with the component.The State is internal and controlled by the React Component itself.State cannot make components reusable.Stateless components cannot have State.
</p>
<h1 className='question'>In how many purpose useeffect use without load data from api?</h1>
<p>Running once on mount: fetch API data.When we want to perform an action once, especially when the app loads or mounts, we can use useEffect to do it. 
Running on state change: validating input field.Validating an input while it's receiving characters is another great application for useEffect.
Running on state change: live filtering.We can use useEffect to filter an array "on the fly" by typing letters into an input element.
Running on state change: trigger animation on new array value.We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it.
Running on props change: update paragraph list on fetched API data update.In this use case, we want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.
Running on props change: updating fetched API data to get BTC updated price.In this example, useEffect is used to fetch new data from an API every 3 seconds. The child component useEffect receives the time as dependency and every time that dependency changes, a new fetch() is triggered.</p>
        </div>
    );
};

export default Footer;