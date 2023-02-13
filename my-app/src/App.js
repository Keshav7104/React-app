import React,{ Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
    
    state ={ 
        characters : []
            // {
            //     name : "Keshav",
            //     state : "Haryana",
            // },
            // {
            //     name : "Sachin",
            //     state : "Maharashtra",
            // },
            // {
            //     name : "Sahil",
            //     state : "Assam",
            // },
            // {
            //     name : "Vanshika",
            //     state : "Uttar-Pradesh",
            // },
    };
    removeCharacter =(index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters,character]});
    }
    render() {
        const { characters } =this.state;
        return(
            <div className="container">
                <h1>Names Table</h1>
                <h2>in react.js</h2>
                <h2>Type your Name and Surname Here :- </h2>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App