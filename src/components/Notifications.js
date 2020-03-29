import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notify_box: false,
            noti_count: 0,
            NotificationMsgList: []
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.NotiCount !== this.props.NotiCount) {
            this.setState({ noti_count: nextProps.NotiCount });
        }
        if (nextProps.NotiMsg !== this.props.NotiMsg) {
            this.state.NotificationMsgList = nextProps.NotiMsg
        }
    }
    ShowNotifications() {
        if (this.state.notify_box === true) {
            this.setState({ notify_box: false });
        } else {
            this.setState({ notify_box: true })
        }
    };
    deleteMsg() {
        this.setState({ NotificationMsgList : []})
    };
    render() {
        const notification_box_hide = {
            'display': 'none'
        };
        const notification_box_show = {
            position: 'absolute',
            top: '10%',
            right: '11%',
            display: 'block',
            zIndex: '99999',
            float: 'right',
            listStyle: 'none',
            padding: '10px 20px',
            width: '22%',
            height: 'auto',
            textAlign: 'center',
            background: 'rgb(255, 255, 255)',
            color: 'rgb(0, 0, 0)',
            fontWeight: 'bolder',
            borderRadius: '2px'
        }
        const notify_bell = {
            position: 'fixed',
            fontSize: '25px',
            top: '10px',
            right: '102px',
            cursor: 'pointer',
            color: '#fff'
        };
        const bell_badge = {
            position: 'fixed',
            right: '125px',
            top: '4px',
            padding: '1px 4px',
            background: '#fff',
            color: '#000',
            fontWeight: 'bolder',
            fontSize: '1vw',
            borderRadius: '5px'
        };
        const notification_list = {
            borderBottom: '1px solid cornflowerblue',
            paddingTop: '0px',
            color: 'dodgerblue'
        }
        const notification_list_child = {
            paddingTop: '11px',
            fontSize: '12px',
            float: 'left',
            color: '#000',
            fontWeight: '400'
        };
        const flag = {
            paddingRight: '12px',
            color: 'green'
        };
        const flag_delete = {
            'position': 'absolute',
            'right': '21px',
            'fontSize': '1.4vw',
            'padding': '0px',
            'cursor':'pointer'
        };
        
        const dontShow = {
            display : 'none'
        };
        const showdelete = {
            display : 'block',
            fontSize: '1.1vw',
            margin: '0px 0px 0px 97px',
            paddingTop: '2px'
        };
    return(
            <div>
    <span style={bell_badge}>{this.state.noti_count}</span>
    <div style={notify_bell}>
        <FontAwesomeIcon icon="bell" onClick={this.ShowNotifications.bind(this)} />
    </div>
    <ul style={(this.state.notify_box) ? notification_box_show : notification_box_hide}>
        <li style={notification_list}>You have {this.state.noti_count} Notifications</li>
        <li style={(this.state.NotificationMsgList === '')? dontShow : showdelete}>Clear All<FontAwesomeIcon icon="trash-alt" onClick={this.deleteMsg.bind(this)} style={flag_delete} /></li>
        {this.state.NotificationMsgList.map((item, index) => {
            return (
                <li key={index} style={notification_list_child}><FontAwesomeIcon icon="flag" style={flag} />{item.msg}</li>
            );
        })}
    </ul>
            </div >
        )
    }
}

export default Notifications;