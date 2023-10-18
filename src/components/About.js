// import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle]= useState({
    //     color:props.mode==='dark' ? 'white':'black',
    //     backgroundColor:props.mode==='dark' ? '#3a3b3b':'white'
    // });
    let myStyle={
        color:props.mode==='dark' ? 'white':'black',
        backgroundColor:props.mode==='dark' ? '#3a3b3b':'white'
    }
  return (
    <div className='container' >
        <h2 className='my-3' style={{color:props.mode==='dark' ? 'white':'black',}}>{props.title}</h2>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, Character count or    
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Textutils is a free character counter tool that provides instant count and word count statistics for a given text. Textutils reports the number of word and characters. Thus it is suitable for writing text with word/ character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Campatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blod, books, excel document, pdf document, essays etc.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
