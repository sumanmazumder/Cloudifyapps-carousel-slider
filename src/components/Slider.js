import React, { useEffect, useState } from "react";
import Header from "./shared/Header";
import "./Slider.css";
import { questionset } from "../services/slider.js";
import { Link } from "react-router-dom";
import handIcon from "../assets/images/hand-cursour.svg";
import leftArrow from "../assets/images/left-arrow-icon.svg";
import rightArrow from "../assets/images/right-arrow-icon.svg";

const Slider = () => {
    const [isActive, setActive] = useState("false");
    const [slider, setSlider] = useState(0);
    useEffect(() => {
        // console.log("Data", questionset);
    }, []);

    const showAns = (id) => {
        // console.log(id);
        setActive(!isActive);
        const newArray = questionset.filter((item) => item.id == id ? item : item);
        console.log("after filter", newArray)
    }
    const showQus = () => {
        setActive(true);
    }
    const nextSlide = () => {
        setSlider(slider === questionset.length - 1 ? 0 : slider + 1);
        setActive(true);
    };

    const prevSlide = () => {
        setSlider(slider === 0 ? questionset.length - 1 : slider - 1);
        setActive(true);
    };

    return (
        <>
            <div className="slider">
                <div className="slider-body">
                    <div className="navigation">
                        <p>{slider + 1} / {questionset?.length}</p>
                        {questionset?.map((item) => {
                            return (<span className={slider + 1 === item.id ? "active" : "notActive"}></span>);
                        })}
                    </div>
                    <div className="controler">
                        <button onClick={prevSlide} className="prev-btn"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67291 16.2559C9.34748 16.5814 8.81984 16.5814 8.4944 16.2559L1.82774 9.58926C1.5023 9.26382 1.5023 8.73618 1.82774 8.41074L8.4944 1.74408C8.81984 1.41864 9.34748 1.41864 9.67291 1.74408C9.99835 2.06951 9.99835 2.59715 9.67291 2.92259L3.5955 9L9.67291 15.0774C9.99835 15.4028 9.99835 15.9305 9.67291 16.2559Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                        <button onClick={nextSlide} className="next-btn"><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.67291 16.2559C9.34748 16.5814 8.81984 16.5814 8.4944 16.2559L1.82774 9.58926C1.5023 9.26382 1.5023 8.73618 1.82774 8.41074L8.4944 1.74408C8.81984 1.41864 9.34748 1.41864 9.67291 1.74408C9.99835 2.06951 9.99835 2.59715 9.67291 2.92259L3.5955 9L9.67291 15.0774C9.99835 15.4028 9.99835 15.9305 9.67291 16.2559Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></button>
                    </div>
                    <div className="slider-carousel">
                        {
                            questionset.map((item, index) => {
                                return (
                                    <div className={slider === index ? "item card-active" : "item hidden"} key={item?.id}>
                                        {console.log("active ========", isActive)}
                                        <div className={isActive ? "hover" : "hover active"}>
                                            {/* {
                                                isActive && */}
                                                <div className="qus">
                                                    <h2>{item?.qstn}</h2>
                                                    <button className="btn" to={index} onClick={() => showAns(item.id)}><img src={handIcon} />Tap to reveal the answer</button>
                                                </div>
                                            {/* } */}
                                            {/* {
                                                !isActive && */}
                                                <button className="ans" onClick={showQus}>
                                                    <img src={item?.des?.img} />
                                                    <p>{item?.des?.ans}</p>
                                                </button>
                                            {/* } */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <h1>Slider</h1> */}
        </>
    )
}
export default Slider;