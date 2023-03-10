import React, { useEffect, useState } from "react";
// import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import './statewise.css'
const Statewise=()=>{
    const [data,setdata]=useState([]);
    const getdata= async()=>{
        const res=await fetch('https://data.covid19india.org/data.json')
        const datares= await res.json();
        // console.log(datares.statewise);
        setdata(datares.statewise);
    }

    // this use effect call when render has been called "[]" is used for only call when page is refresh
    useEffect(()=>{
        getdata();
    },[])

    return(
        <>
        <div className="containor">
            <div className="main_heding">
                <h1><i className="fa-solid fa-virus"></i> India Covid-19 Dashboard <i className="fa-solid fa-virus"></i></h1>
            </div>
            <div className="table_responsive">
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                           <img className="sangam" src="img4.png" alt="" />
                            {
                                data.map((currind,ind)=>{
                                    return(
                                        <tr key={ind}>
                                            <th>{ind}</th>
                                            <th>{currind.state}</th>
                                            <td>{currind.confirmed}</td>
                                            <td>{currind.recovered}</td>
                                            <td>{currind.deaths}</td>
                                            <td>{currind.active}</td>
                                            <td>{currind.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        </>
    )
}
export default Statewise;
