import React from "react"
import '../styles.css'
import hero from '/assets/hero.png'

export default function Hero() {
    return (
        <div className="hero">
            <img className="hero-img" src = {hero} width = "100px" />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}