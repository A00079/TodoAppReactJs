import React from 'react';

class HeroDiscreiption extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
        }
    }
    componentDidMount(){
        console.log("Props Discription",this.props.location.pathname);
        if(this.props.location){
        }
    }
    render(){
        const discription = {
            'color':'#fff',
        };
        return (
            <div>
                <h2 align="center" style={discription}>Hero Discription</h2>
            </div>
        )
    }
}

export default HeroDiscreiption;