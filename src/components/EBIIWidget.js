import './EBIIWidget.css';

const DO = () => {
    return (
        <div className='widget'>
            <h3>Oxygen</h3>
            <div className='round' style={{'border-bottom': '3px solid #05546A', 
                'border-right': '3px solid #05546A'}}>
                <h2 style={{color: '#05546A'}}>7.23 </h2> <p style={{color: '#05546A'}}>mg/L</p>
            </div>
        </div>
    )
}

const Temp = () => {
    return (
        <div className='widget'>
            <h3>Temperature</h3>
            <div className='round' style={{'border-bottom': '3px solid #FD5822', 
                'border-right': '3px solid #FD5822'}}>
                <h2 style={{color: '#FD5822'}}>26 </h2> <p style={{color: '#FD5822'}}>C</p>
            </div>
            
        </div>
    )
}

const Salinitas = () => {
    return (
        <div className='widget'>
            <h3>Salinitas</h3>
            <div className='round' style={{'border-bottom': '3px solid #0A262F', 
                'border-right': '3px solid #0A262F'}}>
                    <h2 style={{color: '#0A262F'}}>12.03 </h2> <p style={{color: '#0A262F'}}>ppt</p>
                </div>

        </div>
    )
}

const PH = () => {
    return (
        <div className='widget'>
            <h3>PH</h3>
            <div className='round' style={{'border-bottom': '3px solid #648E64', 
                'border-right': '3px solid #648E64'}}>
                    <h2 style={{color: '#648E64'}}>7.2 </h2> <p style={{color: '#648E64'}}></p>
            </div>
        </div>
    )
}

export { DO, Temp, Salinitas, PH };