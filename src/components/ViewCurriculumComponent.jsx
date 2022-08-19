import React, { Component } from 'react'
import CurriculumService from '../services/CurriculumService'

class ViewCurriculumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            curriculum: {}
        }
    }

    componentDidMount(){
        CurriculumService.getCurriculumById(this.state.id).then( res => {
            this.setState({curriculum: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Curriculum Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Curriculum First Name: </label>
                            <div> { this.state.curriculum.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Curriculum Last Name: </label>
                            <div> { this.state.curriculum.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Curriculum Email ID: </label>
                            <div> { this.state.curriculum.emailId }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCurriculumComponent