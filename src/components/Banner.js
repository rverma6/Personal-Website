import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(65);
    const [isStopped, setIsStopped] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false); // Track if the animation has already played
    const toRotate = ["Full Stack Developer", "Venture Studio Partner", "Sports Writer"];
    const period = 3000;

    
    const tick = useCallback(() => {
        if (isStopped) {
            return;
        }

        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(100);
        } else {
            setDelta(65);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            if (loopNum === toRotate.length - 1) {
                setIsStopped(true);
            } else {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(100);
            }
        }
        
    }, [isStopped, loopNum, isDeleting, text, toRotate, period]);

    useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      }, delta);

      return () => { clearInterval(ticker) };
  }, [tick, delta]);

    useEffect(() => {
        if (hasAnimated) return; // Exit if already animated

        const handleScroll = () => {
            if (window.scrollY > 0 && !hasAnimated) {
                setHasAnimated(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAnimated]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => {
                                if (isVisible && !hasAnimated) {
                                    setHasAnimated(true);
                                }
                                return (
                                    <div className={isVisible && !hasAnimated ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome!</span>
                                        <h1>{`I'm Rayva Verma.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Venture Studio Partner", "Sports Writer" ]'><span className="wrap">{isStopped ? '' : text}</span></span></h1>
                                        <p>I'm currently studying Statistics, Computer Science, and Math at the University of Illinois at Urbana-Champaign. Feel free to email me if you'd like to connect, chat, or have any questions.</p>
                                        <button onClick={() => console.log('connect')}> My Resume <ArrowRightCircle size={25} /></button>
                                    </div>
                                );
                            }}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
