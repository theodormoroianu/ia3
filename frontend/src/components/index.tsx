import React from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ArhivaEducationala } from "./arhiva_educationala";
import { Problema } from "./problema";

import infoarena from '../assets/infoarena.png';

export const Index = () => {
    console.log("Got here!")
    const navigate = useNavigate();

    return (
        <div style={{
            height: "100%",
            width: "100%",
        }}>
                <Navbar style={{
                    height: "55px",
                    backgroundColor: "rgb(92, 136, 11)",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",    
                }}>
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>
                            <img src={infoarena} style={{ backgroundColor: 'transparent', height: "45px", paddingTop: "5px" }} alt="Infoarena" />
                        </Navbar.Heading>
                        <Navbar.Divider />
                        <Button className="bp5-minimal" icon="home" text="Home" onClick={() => navigate("/")} />
                        <Button className="bp5-minimal" icon="add" text="Arhiva Educationala" onClick={() => navigate("/arhiva-educationala")} />
                    </Navbar.Group>
                </Navbar>
                <div style={{
                    height: "calc(100% - 55px)",
                    overflow: "auto",
                }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/arhiva-educationala" element={<ArhivaEducationala />} />
                        <Route path="/problema/:numeProblema" element={<Problema />} />
                    </Routes>
                </div>
        </div>
    );
}

const Home = () => {
    // Make a cool home page, full screen, with a cool background.
    return <div style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <h1>Home</h1>
    </div>
}
