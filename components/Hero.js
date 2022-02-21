import gsap from 'gsap'
import {useRef, useEffect} from 'react'

export default function Hero() {
    const headerSpans = useRef([]);
    const lines = useRef([]);

    const lineComponents = () => {
        var lineArray = []

        for (let i = 0; i < 10; i++) {
            lineArray.push(<div key={i} style={{opacity: 0}} ref={div => lines.current.push(div)} className='line'></div>);
        }

        return lineArray;
    }

    useEffect(() => {
        
        gsap.fromTo(headerSpans.current, {
            opacity: 0,
            y: 100
        }, 
        {
            delay: .38,
            opacity: 1,
            y: 0,
            stagger: .38,
            duration: .43
        });

        var linetl = gsap.timeline({repeat: Infinity, delay: 1});

        linetl.from(lines.current, {
            opacity: 0,
            duration: 0
        });

        linetl.to(lines.current, {
            opacity: 1,
            duration: .5,
            ease: "power4.out",
            overwrite: true
        });

        linetl.to(lines.current , {
            opacity: 0,
            duration: .5,
            ease: "power4.out"
        })

        return () => {
            
        }
    }, [])

    return (
        <>
            <section className="hero roboto">
                <h1 className="header">
                    <span ref={span => headerSpans.current.push(span)}>Udvikler.&nbsp;</span>
                    <span ref={span => headerSpans.current.push(span)}>Kreativ.&nbsp;</span>
                    <span ref={span => headerSpans.current.push(span)}>Løsning.&nbsp;</span>
                    <span ref={span => headerSpans.current.push(span)}>Data.&nbsp;</span>
                    <span ref={span => headerSpans.current.push(span)}>Glæde.&nbsp;</span>
                </h1>
                <div className='lines'>
                    {lineComponents()}
                </div>
            </section>
        </>
    )
}