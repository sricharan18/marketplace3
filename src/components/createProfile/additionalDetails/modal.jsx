import React from "react";
import { connect } from 'react-redux';

import Certifications from "./certifications";
import EducationalDetails from "./educationalDetails";
import WorkHistory from "./workHistory";
import Recommendations from "./recommendations";
import EditEmploymentModal from "../../editEmploymentModal";
import EditBasicDetailsModal from "../../editBasicDetailsModal";

class Modal extends React.Component {

    render(){
        let modal=null
        switch(this.props.modalSelected)
        {
            case "educationalDetails":
                modal=(<EducationalDetails/>)
                break
            case "certifications":
                modal=(<Certifications/>)
                break
            case "workDetails":
                modal=(<WorkHistory />)
                break
            case "recommendations":
                modal=(<Recommendations/>)
                break
            case "employmentDetails":
                modal=(<EditEmploymentModal/>)
                break
            case "basicDetails":
                modal=(<EditBasicDetailsModal/>)
                break
            case 'summary':
                modal=(<div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Summary</h5>
                </div>
                <div className="modal-body"> 
                <textarea className='form-control' cols='100'></textarea>
                </div>
                <div className="modal-footer">
                <div className="btn-group NextFormButtons ModalNextFormButtons ">
                    <button className="common-btn commonBlueBtn">Save</button>
                </div>
                </div>
                </div>)
                break
            default:
                break
        }

        return (
            <span>
                {modal}
            </span>
        )
    }
}

const mapStateToProps = state => {
    return {
        modalSelected : state.modalSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
         
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Modal)