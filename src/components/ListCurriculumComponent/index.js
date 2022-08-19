import React, { useState, useEffect } from 'react'
import CurriculumService from '../services/CurriculumService'


function ListCurriculumComponent(){
    const [curriculums] = useState([])

    return (
        <div>
             <h2 className="text-center">Curriculums List</h2>
             <div className = "row">
                <button className="btn btn-primary" onClick={ () => addCurriculum}> Add Curriculum</button>
             </div>
             <br></br>
             <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Curriculum First Name</th>
                                <th> Curriculum Last Name</th>
                                <th> Curriculum Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.curriculums.map(
                                    curriculum => 
                                    <tr key = {curriculum.id}>
                                         <td> { curriculum.firstName} </td>   
                                         <td> {curriculum.lastName}</td>
                                         <td> {curriculum.emailId}</td>
                                         <td>
                                             <button onClick={ () => this.editCurriculum(curriculum.id)} className="btn btn-info">Update </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCurriculum(curriculum.id)} className="btn btn-danger">Delete </button>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.viewCurriculum(curriculum.id)} className="btn btn-info">View </button>
                                         </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

             </div>

        </div>
    )
}


class ListCurriculumComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                curriculums: []
        }
        this.addCurriculum = this.addCurriculum.bind(this);
        this.editCurriculum = this.editCurriculum.bind(this);
        this.deleteCurriculum = this.deleteCurriculum.bind(this);
    }

    deleteCurriculum(id){
        CurriculumService.deleteCurriculum(id).then( res => {
            this.setState({curriculums: this.state.curriculums.filter(curriculum => curriculum.id !== id)});
        });
    }
    viewCurriculum(id){
        this.props.history.push(`/view-curriculum/${id}`);
    }
    editCurriculum(id){
        this.props.history.push(`/add-curriculum/${id}`);
    }

    componentDidMount(){
        CurriculumService.getCurriculums().then((res) => {
            this.setState({ curriculums: res.data});
        });
    }

    addCurriculum(){
        this.props.history.push('/add-curriculum/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Curriculums List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCurriculum}> Add Curriculum</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Curriculum First Name</th>
                                    <th> Curriculum Last Name</th>
                                    <th> Curriculum Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.curriculums.map(
                                        curriculum => 
                                        <tr key = {curriculum.id}>
                                             <td> { curriculum.firstName} </td>   
                                             <td> {curriculum.lastName}</td>
                                             <td> {curriculum.emailId}</td>
                                             <td>
                                                 <button onClick={ () => this.editCurriculum(curriculum.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCurriculum(curriculum.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewCurriculum(curriculum.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCurriculumComponent