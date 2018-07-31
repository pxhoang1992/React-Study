import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// const person = {
//     name : 'Tat Quy',
//     age : 26
// }

// const text = (<h1>This is my friend name : {person.name}  and age : {person.age} </h1>)

// var number = [1, 2, 3, 4];

// var double = number.map((item) => item * 2 + ', ')

// ReactDOM.render(text, document.getElementById('root'));
// registerServiceWorker();

// function displayTime() {
//     const time = (
//         <div>
//             <h1>Current time is: </h1>
//             <h1>{new Date().toLocaleTimeString()}</h1>
//         </div>
//     );

//     ReactDOM.render(time, document.getElementById('root'));
// }

// setInterval(displayTime, 1000);

// C1: Define component as javascript function
// Begin character must captain
// function ShowInfo(props) {
//     return (
//         <div>
//             <p>name : {props.name}</p>
//             <p>email : {props.email}</p>
//         </div>
//     );
// }

// const element = <ShowInfo name="hoang" email="hust" />

// ReactDOM.render(element, document.getElementById('root'));

// ** C2: Define component as ES6 class
// class ShowInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>name: {this.props.name}</h1>
//                 <h2>email: {this.props.email}</h2>
//             </div>
//         );
//     }
// }

// const element = <ShowInfo name="hoang" email="pxhoang199@gmail.com"/>

// ReactDOM.render(element, document.getElementById('root'));

/*
    this Component call component other
*/

// class User extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.name}</p>
//                 <p>{this.props.email}</p>
//             </div>
//         );

//     }
// }

// class OtherInfo extends React.Component {
//     render() {
//         return (
//             <div>
//                 <User name={this.props.name} email={this.props.email} />
//                 <p>{this.props.other}</p>
//             </div>
//         );

//     }
// }

// const element = <OtherInfo name="NTQ" email="meohoang" other="fuck" />

// ReactDOM.render(element, document.getElementById('root'));


/*
    How to use state on React
*/

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { second: 0 };
//     }

//     incrementCounter() {
//         this.setState(
//             (prevState, props) => ({
//                 second : prevState.second + 1
//             })
//         );
//     }

//     componentDidMount() {
//         this.timeID = setInterval(
//             () => this.incrementCounter(),
//             1000
//         )
//     }

//     componentWillUnmount() {
//         clearInterval(this.timeID);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>This is a counting machine </h1>
//                 <h2>Seconds: {this.state.second}</h2>
//             </div>
//         );
//     }
// }

// const element = <Counter />

// ReactDOM.render(<Counter />, document.getElementById('root'));

/*
    Handle envent of button on React
*/

// class ButtonLight extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOn: true
//         }
//     }

//     handle = () => {
//         this.setState({
//             isOn: !this.state.isOn
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <button className="button" onClick={this.handle}>
//                     Button is : {this.state.isOn? "ON" : "OFF"}
//                 </button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<ButtonLight />, document.getElementById('root'))

/*
    How to use list, map on React
*/

// function ListItem(props) {
//     return <li>{props.value}</li>
// }

// class AnimalsComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.listItems = props.animals.map(
//             (animal, index) => <ListItem key={animal.key} value={index.toString() + "-" + animal.name + " " + animal.color} />
//         );
//     }

//     render() {
//         return (
//             <ul>
//                 {this.listItems}
//             </ul>
//         );
//     }
// }

// const animals = [
//     {
//         key: "a",
//         name: "tiger",
//         color: "black"
//     },
//     {
//         key: "b",
//         name: "buffalo",
//         color: "red"
//     }
// ]

// ReactDOM.render(<AnimalsComponent animals={animals} />, document.getElementById('root'));


/*
    How to use Form on React
*/

/*
class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            textDate: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            textDate: event.target.value
        });
    }

    handleSubmit = (event) => {
        alert('Hello : ' + this.state.textDate)
    }

    render() {
        return (
            <form  onSubmit={this.handleSubmit}>
                <label>Input text your name
                    <input type="text" value={this.state.textDate} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

ReactDOM.render(<FormComponent/>, document.getElementById('root'))
*/

/* How to handle multiple input element*/
// class FormComponent extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             textDate: ""
//         }
//     }

//     handleChange = (event) => {
//         this.setState({
//             textDate: event.target.value
//         });
//     }

//     handleSubmit = (event) => {
//         alert('Hello : ' + this.state.textDate)
//     }

//     render() {
//         return (
//             <form  onSubmit={this.handleSubmit}>
//                 <label>Input text your name
//                     <input type="text" value={this.state.textDate} onChange={this.handleChange}></input>
//                 </label>
//                 <input type="submit" value="submit"/>
//             </form>
//         );
//     }
// }

// ReactDOM.render(<FormComponent/>, document.getElementById('root'))



