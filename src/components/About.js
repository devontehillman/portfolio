import React, { Component } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class About extends Component {

    render() {
        return (
            <div className="about-section">
                <img
                className="img-fluid img-profile-sm @include media-breakpoint-up(sm) { ... } rounded-circle mx-auto mb-2"
                src="images/profile2.jpg"
                alt="..."
                style={{boxShadow: "0px 1px 20px 7px rgba(0,0,0,0.3)"}}
                />
                <h1 id="nametitle" style= {{id:'nametitle',fontFamily: 'poppins',fontWeight: 800, fontSize:'60px'}}>Devonte Hillman</h1>
                <p style= {{fontFamily: 'poppins'}}>
                I am seeking a challenging software developer position where I can apply my foundational
                knowledge of object-oriented programming, web development, and passion for creating
                maintainable code. My career goals are focused on securing an internship that will allow me to
                gain first-hand experience in what it’s like to contribute to a team of experienced developers. As
                a current student pursuing a bachelor’s degree in computer science and a graduate of a 6-month
                intensive web design program, I have acquired a range of technical and analytical skills that will
                enable me to make valuable contributions.
                </p>
                <div className="socials">
                    <a href="https://github.com/devontehillman">
                        <FontAwesomeIcon className="socialIcon" color="Black" icon={['fab', 'github']} size="3x"/>
                    </a>
                    <a href="https://www.linkedin.com/in/devonte-hillman-3a1558158/">
                        <FontAwesomeIcon className="socialIcon" color="#eb5740" icon={['fab', 'linkedin']} size="3x"/>
                    </a>
                    <a href="mailto:hillmand@mail.gvsu.edu">
                        <FontAwesomeIcon className="socialIcon" color="Black" icon="envelope" size="3x"/>
                    </a>
                </div>
            </div>
        )
    }
}
