import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Signin from "../components/signin/index";
import Signup from "../components/signup";
import Logo from "../components/signin/wellbyHands.png";

function Home(){
    return (
        <div id="homeContainer">
            <Container className="text-center" style={{ background: '#0e464c' }}>
                <div className="heading">
                    <img src={Logo} className="logo" alt="logo"></img>
                    <h2 className="h2Style">WELLBY</h2>
                    <hr></hr>
                    <h5 className="h5Style">Post wellness questions</h5>
                    <h5 className="h5Style">Share wellness successes</h5>
                    <h5 className="h5Style2">Celebrate your glow</h5>
                </div>                
            </Container>           
                <Signin />
                <Signup />
        </div>
    )
};

export default Home;