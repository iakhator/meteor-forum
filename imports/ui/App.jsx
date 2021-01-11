import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../store/actions/calc';

const App = (props) => {
  console.log(props, 'props');

  const increment = (e) => {
    e.preventDefault();
    // console.log('yes');
    props.increment()
  }
  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-blue-500 uppercase"> {props.calc.value}</h1>
      <div className="flex justify-center">
        <a href="" onClick={increment} className="bg-blue-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"> 
          Increment
        </a>
      </div>
    </div>
  )
};

const mapStateToProps = ({calc}, ownProps) => ({
  calc
})

const mapDispatchToProps = {
 increment
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
