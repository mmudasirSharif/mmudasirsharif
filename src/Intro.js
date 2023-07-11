import React from 'react';
import './Intro.css';
import { Button } from 'react-bootstrap';
import { BiCloudDownload } from 'react-icons/bi';
import {Typewriter, Cursor} from 'react-simple-typewriter';


function Intro() {
    return (
        <div className="fixed-component">
            <div className="text-content">
                <div className="text">
                    <h2>Howdy!</h2>
                    <p className='p1'>I'm Muhammad</p>
                    <p className='p2'>Mudasir Sharif</p>
                    <h2>
                        <Typewriter
                        words={['Software Engineer', 'Web Developer']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                        />
                    </h2>
                    <Button variant="primary" href="/resume.pdf" target="_blank"> <BiCloudDownload /> Resume </Button>
                </div>
            </div>
            <div className="image-content">
                <img src="man.png" alt="its pics" className="image" />
            </div>
        </div>
    );
}

export default Intro;

