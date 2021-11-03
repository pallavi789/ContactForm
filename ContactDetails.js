import REACT from "react";
import { LINK } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = (props) => {
    const {name, email } =props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <button className="ui button blue center">BACK TO CONTACT LIST</button>
            </div>
        </div>
    );
};
        
export default ContactDetail;