import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="mt-auto font-small">
            <div className="container py-4 text-white">
                <div className="mb-md-3 text-center">
                    <a href="https://www.facebook.com/binu.kumar.90857" target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-facebook-f fa-lg fa-2x"> </i>
                    </a>
                    <a href="https://github.com/Binu42" target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-github fa-lg fa-2x"> </i>
                    </a>
                    <a href="https://www.linkedin.com/in/binu-kumar-5a7038146/" target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in fa-lg fa-2x"> </i>
                    </a>
                    <a href="https://www.instagram.com/binu__42/" target='_blank' rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-lg fa-2x"> </i>
                    </a>
                </div>
            </div>
            <div className="footer-copyright text-white text-center py-2">Made with   <svg className="heart" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
            </svg>   by <strong>Binu kumar</strong></div>
            
            <div className="bg-copyright-footer footer-copyright text-white text-center py-2">© 2020</div>

        </footer>
    )
  }
}
