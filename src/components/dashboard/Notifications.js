import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props;
    return(
        <div className="section">
            <div className="card blue-grey z-depth-5">
                <div className="card-content white-text text-darken-3">
                    <span className="card-title">Notifications</span>
                    <ul className="notifications">
                            { notifications && notifications.map(item =>{
                                        return <li key={item.id}>
                                            <span className="pink-text">{item.user} </span>
                                            <span>{item.content}</span>
                                            {/* <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div> */}
                                        </li>
                            })}                    
                    </ul>
                </div>
            </div>
        </div>
       
    );
};

export default Notifications