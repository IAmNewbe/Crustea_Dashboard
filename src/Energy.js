import './Energy.css';
import LineChart from './graph';
import { useState } from 'react';
import CompanyHeader from './components/Company';

const Energy = () => {

    const [userData, setUserData] = useState({
        labels: ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
        datasets: [
            {
                label: 'PLN Cost',
                data: [12,24,35,45,57,60,75],
                borderColor: '#0684a7',
            },
            {
                label: 'PV Cost',
                data: [10,18,30,38,51,53,65],
                borderColor: '#ACCB37',
            },
        ]
    });

    return (
        <div className='Energy'>
            <CompanyHeader />
            <div className='tools'>
                    <label style={{color: '#05546A'}}>Ask : </label>
                    <button className='tools-feature'>Installment</button>
                    <button className='tools-feature'>Maintenance</button>
                    <button className='tools-feature'>Reparation</button>
                    <button className='tools-feature'>Call Center</button>
                    <button className='tools-feature'>Consultation</button>
                </div>
            <div className='container'>
                <div className='widget-energy'>
                    <h3>Load Power</h3>
                    <h1 style={{color: '#05546A'}}>100 </h1> <p style={{color: '#05546A'}}>Watt</p>
                </div>
                <div className='widget-energy'>
                    <h3>Load Voltage</h3>
                    <h1 style={{color: '#05546A'}}>300 </h1> <p style={{color: '#05546A'}}>Volt</p>
                </div>
                <div className='widget-energy'>
                    <h3>PV Power</h3>
                    <h1 style={{color: '#658C64'}}>100 </h1> <p style={{color: '#658C64'}}>Watt</p>
                </div>
                <div className='widget-energy'>
                    <h3>PV Voltage</h3>
                    <h1 style={{color: '#658C64'}}>100 </h1> <p style={{color: '#658C64'}}>Voltage</p>
                </div>
                <div className='feature'>
                    
                </div>
            </div>
            <div className='timeseries'>
                <div className='feature'>
                    <div className='widget-cost pln' >
                        <h3>Energi PLN</h3>
                        <h1>100 </h1> <p>Kwh</p>
                    </div>
                    <div className='widget-cost pv'>
                        <h3>Energi PV</h3>
                        <h1>100 </h1> <p>Kwh</p>
                    </div>
                   
                </div> 
                <div className='linechart'>
                    <LineChart className='chart' charData={userData}/>
                </div>
                
            </div>
            <div className='price-widget'>
                
                    <div className='widget-cost pln' >
                        <h3>Biaya tanpa PV</h3>
                        <h1>100 </h1> <p>Rupiah</p>
                    </div>
                    <div className='widget-cost pv'>
                        <h3>Biaya dengan PV</h3>
                        <h1>100 </h1> <p>Rupiah</p>
                    </div>
                
                <div className='price'>
                            <p>Tarif Listrik</p>
                            <input 
                            placeholder='Tarif perbulan'
                            type='text'
                            className='KwH-cost'/>
                            <button>Apply</button>
                </div>
            </div>
            
        </div>
    );
}

export default Energy;