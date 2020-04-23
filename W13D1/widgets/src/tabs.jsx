import React from 'react'


export default class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        // [{title: awdaw}, {title: 12312341}, {title: zzzzzzz}] <- array of objects
        // props = {
        //     url: /website
        //     source: b;ahga
        //     tabs: [{title: awdaw}, {title: 12312341}, {title: zzzzzzz}]
        // }
        this.tabs = props.tabs;
    }
    
    ListItem(tab, idx) {
        return <li key={idx} onClick={ () => this.handleClick(idx)}>{tab.title}</li>;
    }

    render(){
        const listItems = this.tabs.map((tab, idx) => this.ListItem(tab, idx) );
        return (
            <>
                <ul>{listItems}</ul>
                <article>
                    {this.tabs[this.state.index].title} 
                    <br/>
                    {this.tabs[this.state.index].content}
                </article>
            </>
        )

    }

    handleClick(idx){
        console.log("handle click triggered")
        this.setState({index : idx});

    }
}


