import React from "react";
import "./index.css";
import { Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

function Footer(){  
      return (
        <div className="fixed-bottom" id="myFooter">            
            <Row id="footerRow">            
                <Col className="text-center">  
                    <p className="name">Whitney Tarkington</p>    
                    <a href="https://whittark.github.io/whit_tarkington_2019-2010/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/whitney-tarkington-215a136/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/whittark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>   
            </Row>                
        </div>
    )
};
export default Footer;