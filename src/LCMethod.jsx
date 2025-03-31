import React from "react";
class LCMethod extends React.Component {
    constructor(props) {
        console.log('constructor called');
        super(props)
        this.state={count:0,color:'white'}
        console.log('props');
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps called');
        console.log(state)
        if(state.color==props.favcolor){
            return({color:state.color})
        }
        else{
            return({color:props.favcolor})
        }
        console.log(props)
        return null;

    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        console.log('Render Method Called');
        return (
            <>
                <p>This is Component lifecycle</p>
                <p>fav color:{this.state.color}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Click me</button>
            </>
        )
    }
}
export default LCMethod;
