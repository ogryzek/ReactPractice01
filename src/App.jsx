function App() {
  class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return(
      <div>
        <h1>Hello React!</h1>
      </div>
    )
    // Change code above this line
  }
};
  const MyComponent = function() {
  // Change code below this line
  return (
    <>
      <div>Hello</div>
    </>
    );
    // Change code above this line
  }
  const JSX = 
  <>
  <div className="my-div">
    {/* hey */}
    <h1>My First React App</h1>
    <p>I'm learning React!</p>
    <p>Lets render this to the DOM</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    <div>
      <h2>Welcome to React!</h2> 
      <br></br>
      <p>Be sure to close all tags!</p>
      <hr/>
  </div>
  </>
  return (
    <>
      {JSX}
    </>
  )
}
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
      <ChildComponent />

        { /* Change code above this line */ }
      </div>
    );
  }
};
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};

export default App
