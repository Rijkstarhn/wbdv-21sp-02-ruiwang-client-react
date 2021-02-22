import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <div className="container">
            <div className="row col-sm-12  bg-secondary">
                <div className="col-form-label col-sm-4">
                    <Link to = '/courses'>
                        <i className="navDivMargin fas fa-arrow-left text-white"></i>
                    </Link>

                    <a className=" navbar-brand mb-0 h1 text-white" href="#">CS5610 - Webdev</a>
                </div>
                <div className="col-form-label col-sm-8">
                    <ul className="nav nav-tabs mr-auto nav-fill">
                        <li className="nav-item active">
                            <a className="nav-link text-white" href="#">Build<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pages<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Theme<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Store<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Apps<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Settings<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#"><i className=" fas fa-plus-circle"></i><span
                                className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="container containerMargin col-sm-4  bg-dark">
                    <div className="list-group">
                        <a className="list-group-item list-group-item-action text-white bg-secondary" href="#">Module 1
                            jQuery<i
                                className="float-right fas fa-times"></i></a>
                        <a className="list-group-item list-group-item-action text-white bg-secondary" href="#">Module 2
                            React<i
                                className="float-right fas fa-times"></i></a>
                        <a className="list-group-item list-group-item-action text-white bg-secondary" href="#">Module 3
                            Redux<i
                                className="float-right fas fa-times"></i></a>
                        <a className="list-group-item list-group-item-action text-white bg-secondary" href="#">Module 4
                            Native<i
                                className="float-right fas fa-times"></i></a>
                        <a className="list-group-item list-group-item-action text-white bg-secondary" href="#">Module 5
                            Angular<i
                                className="float-right fas fa-times"></i></a>
                        <a className="list-group-item list-group-item-action text-white bg-secondary" href="#"><i
                            className="float-right fas fa-plus-circle"></i></a>
                    </div>
                </div>
                <div className="col-sm-8">
                    <ul className="pillsMargin nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link active bg-secondary" href="#">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Topic 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#"><i
                                className="fas fa-plus-circle fa-lg"></i></a>
                        </li>
                    </ul>
                    <br/>
                    Content currently blank
                </div>
            </div>
        </div>
    </div>

export default CourseEditor