import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Notifications from '../components/Notifications.js';

class EnterHeros extends React.Component {
    constructor() {
        super();
        this.state = {
            hero: '',
            HeorArray: [],
            herosCount: 0,
            notificationMsg: []
        };
    }
    deleteHeroFromList(heroid) {
        var AfterDeleteList = this.state.HeorArray.filter(item => {
            return item.id !== heroid
        });
        this.setState({ HeorArray: AfterDeleteList })
        this.setState({ herosCount: AfterDeleteList.length })

    };
    AddHero() {
        if (this.refs.hero.value === '') {
            alert("Please enter a Hero ")
        } else {
            let obj = this.state.HeorArray.concat({ 'id': '_' + Math.random().toString(36).substr(2, 9), 'Hero': this.state.hero });
            this.setState({ HeorArray: obj });
            this.setState({ hero: '' });
            this.refs.hero.value = '';
            this.setState({ herosCount: obj.length })
            var notification_msg = this.state.notificationMsg.concat({'msg' : this.state.hero + ' is added to your list'});
            this.state.notificationMsg = notification_msg
        }
    };
    addHeroToList(el) {
        this.setState({ hero: this.refs.hero.value })
    };
    render() {
        const test = {
            'cursor': 'pointer',
            'backgroundColor': '#000000',
            'backgroundImage': 'linear-gradient(315deg, #000000 0%, #414141 74%)',
            'width': '26%',
            'height': '40px',
            'marginLeft': '35%',
            'marginTop': '20px',
            'listStyleType': 'none',
            'borderRadius': '6px',
            'boxShadow': '4px 7px #000'
        }
        const herolist = {
            'wordBreak': 'normal',
            'textTransform': 'uppercase',
            'background': 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
            'WebkitBackgroundClip': 'text',
            'WebkitTextFillColor': 'transparent',
            'fontWeight': 'bolder',
            'backgroundColor': '#2a2a72 !important',
            'backgroundImage': 'linear-gradient(315deg, #2a2a72 0%, #009ffd 74%) !important',
            'padding': '10px',
            'lineHeight': '2.3',
            'fontSize': '1.7vw'
        };
        const addHeros = {
            'borderRadius': '5px',
            'padding': '10px',
            'width': '25%',
            'marginLeft': '5%'
        };
        const deleteHero = {
            'float': 'right',
            'color': '#fff',
            'marginTop': '8px',
            'fontSize': '2vw',
            'marginRight': '10px'
        };
        const addMore = {
            'marginLeft': '20px',
            'fontSize': '20px',
            'padding': '0px 8px 4px 8px',
            'color': 'white',
            'cursor': 'pointer',
            'border': '1px solid',
            'borderRadius': '26px'
        };
        const removedefaults = {
            'textDecoration': 'none'
        };
        const HeroState = {
            'position': 'absolute',
            'top': '65px',
            'left': '90px',
            'fontSize': '1.7vw',
            'fontWeight': 'bolder',
            'color': '#fff',
            'letterSpacing': '1px'
        };
        const totalCount = {
            'paddingLeft': '10px'
        };
        const HeroCount = {
            'margin': '12px'
        };
        return (
            <div>
                <Notifications NotiCount={this.state.herosCount} NotiMsg={this.state.notificationMsg}/>
                <div style={HeroState}>
                    Total Heros<FontAwesomeIcon icon="user-ninja" style={totalCount} />
                    <h4 style={HeroCount}>{this.state.herosCount}</h4>
                </div>
                <input type='text' onChange={this.addHeroToList.bind(this)} ref="hero" placeholder='Enter Your Hero...' style={addHeros} />
                <span onClick={this.AddHero.bind(this)} style={addMore}>&#43;</span>
                <ul>
                    {this.state.HeorArray.map((item, index) => {
                        return (
                            <li key={index} style={test} title="Click For More Details"><Link to={'/Discription/' + item.Hero} style={removedefaults}><span style={herolist}>{item.Hero}</span></Link><span title={'Delete ' + item.Hero} style={deleteHero} onClick={this.deleteHeroFromList.bind(this, item.id)}><FontAwesomeIcon icon="trash-alt" /></span></li>
                        );
                    })}
                </ul>
            </div >
        )
    }
}

export default EnterHeros;