import React, { Component } from 'react';
import CardList from "./Robofriends/CardList";
import {robots} from './Robofriends/robots';
import SearchBox from './Robofriends/SearchBox';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
             
        })
        

        return (
            <div className='tc'>
                 <h1 className='f2 tc'>Robofriends</h1>
                 <SearchBox searchChange={this.onSearchChange}/>
                 <CardList robots= {filteredRobots}/>
             </div>
    );
}
}
export default App;