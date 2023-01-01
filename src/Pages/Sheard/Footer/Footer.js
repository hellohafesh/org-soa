import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='h-24 w-24' alt='' src="https://i.ibb.co/3pRKnP0/307314424-385836870431319-3448937172785325094-n-1-removebg-preview.png"></img>
                    <p> Swopno Orjone Amra<br /> Providing reliable Socity since 2020</p>
                </div>

                <div>
                    <span className="footer-title">Who we are ?</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Privacy Policy</Link>
                    <Link className="link link-hover">Terms And Conditions</Link>
                    <Link className="link link-hover">Refund Policy</Link>
                    <Link className="link link-hover">Download</Link>
                </div>
            </footer>
            <h1 className="bg-base-200 text-base-content text-center" >Copyright © 2023 || Swopno Orjone Amra || All rights reserved. </h1>


        </>
    );
};

export default Footer;