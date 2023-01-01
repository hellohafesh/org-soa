import React from 'react';
import './BAnner.css';
const Banner = () => {

    return (
        <div>
            <div className="hero h-[80vh]" style={{ backgroundImage: `url("https://as1.ftcdn.net/v2/jpg/03/20/76/68/1000_F_320766804_s59tRo6X9cxZL0g1s7bZEZA9STBCF3bx.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="hero-overlay bg-gradient-to-r from-current"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;