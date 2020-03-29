import React from 'react';

class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify_box: false
        };
    }
    ShowNotifications() {
        if (this.state.notify_box === true) {
            this.setState({ notify_box: false });
        } else {
            this.setState({ notify_box: true })
        }
    };
    render() {
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