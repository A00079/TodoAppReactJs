import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify_box: false
        };
    }
    ShowNotifications() {
        if (this.state.notify_box == true) {
            this.setState({ notify_box: false });
        } else {
            this.setState({ notify_box: true })
        }
    };
    render() {
        const notification_box_hide = {
            'display': 'none'
        };
        const notification_box_show = {
            display: 'block',
            zIndex: '9999',
            float: 'right',
            marginRight: '126px',
            marginTop: '45px',
            listStyle: 'none',
            padding: '10px 20px',
            width: '22%',
            height: '100px',
            textAlign: 'center',
            background: 'rgb(255, 255, 255)',
            color: 'rgb(0, 0, 0)',
            fontWeight: 'bolder',
            borderRadius: '2px'
    }
    const appHeader = {
        color: "white",
        backgroundColor: "DodgerBlue",
        margin: '0px 0px 0px 0px',
        padding: "0px",
        height: "40px",
        fontFamily: "Arial",
    };
    const appHeaderText = {
        float: "left",
        padding: "0px 0px 0px 20px",
        fontSize: "20px",
        marginTop: '10px'
    };
    return(
            <div style = { appHeader } >
            <h4 style={appHeaderText}>Hero's league &#10148; </h4>
            </div>
        )
    }
}

export default HeaderNav;