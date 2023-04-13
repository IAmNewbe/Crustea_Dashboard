import './EBII.css';
import { useState } from 'react';
import LineChart from './graph';
import { DO, Temp, Salinitas, PH } from './components/EBIIWidget';
import CompanyHeader from './components/Company';
import Select from 'react-select';

const EBII = () => {
    const options = [
        { value: 'Kolam 1', label: 'Kolam 1' },
        { value: 'Kolam 2', label: 'Kolam 2' },
        { value: 'Kolam 3', label: 'Kolam 3' }
      ];

    const [userData, setUserData] = useState({
        labels: ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
        datasets: [
            {
                label: 'Dissolved Oxygen',
                data: [1.3,2.4,3.5,4.5,5.7,6.0,7.5],
                borderColor: '#0684a7',
            },
            {
                label: 'Temperature',
                data: [23,24,35,25,27,26,27],
                borderColor: '#FD5822',
            },
            {
                label: 'Salinitas',
                data: [2.3,3.4,4.5,5.5,6.7,7.0,8.5],
                borderColor: '#0A262F',
            },
            {
                label: 'PH',
                data: [7.3,7.4,7.5,7.5,7.7,6.0,7.5],
                borderColor: '#ACCB37',
            },
        ]
    });

    return (
        <div className='EBII'>
            <div className='header'>
                <CompanyHeader />
                <div className='tools'>
                    <label style={{color: '#05546A'}}>Ask : </label>
                    <button className='tools-feature'>Installment</button>
                    <button className='tools-feature'>Maintenance</button>
                    <button className='tools-feature'>Reparation</button>
                    <button className='tools-feature'>Call Center</button>
                    <button className='tools-feature'>Consultation</button>
                </div>
            </div>
            <div className='line'></div>
            <div className='pond-list'>
                    <label>Kolam : 
                    <Select
                        defaultValue={[options[2], options[3]]}
                        isMulti
                        name="pond"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                    </label>
                </div>
            <h2 className='pond-name'>Kolam Satu</h2>
            <div className='container card'>
                <DO />
                <Temp />
                <Salinitas />
                <PH />
            </div>
            <div className='container chart'>
                <div className='chart'>
                    <LineChart 
                    className='line-chart'
                    charData={userData}/> 
                </div>
            </div>
        </div>
    );
}

export default EBII;