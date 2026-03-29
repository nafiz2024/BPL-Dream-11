import React from 'react';
import bannerImg from '../../../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className='container mx-auto'>
            <div
                className="hero h-[545px] opacity-100"
                style={{
                    backgroundImage: `
                    url(${bannerImg})`,
                }}
            >
                <div className='hero-overlay bg-black/50'></div>
                <div className="hero-content text-neutral-content text-center opacity-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;