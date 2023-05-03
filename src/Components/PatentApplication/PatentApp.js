import React from 'react'
import './guide.css'
import Typography from '@mui/joy/Typography';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import Checkbox from '@mui/joy/Checkbox';
import Table from '@mui/joy/Table';
import PatentTable from './PatentTable';
import TablePatentDetail from './TablePatentDetail';

export default function PatentApp() {
  return (
    <div className='project-guide-main'>
        <h1>CHE261A Patent Application</h1>
        <p style={{padding:'5px'}}>
        Nature of Invention: Process design        
        </p>
        <p style={{padding:'5px'}}>
        <b>Application: </b>Your Company Name       
        </p>
        <p style={{padding:'5px'}}>
        <b>Inventors: </b>Names will be listed in the order of contribution (the name of the highest contributor will be listed first). The authors must be listed in the Technical Services division.)       
        </p>
        <p style={{padding:'5px'}}>
        <b>Chemical Formula: </b>              
        </p>
        <p style={{padding:'5px'}}>
        <b>Chemical Name: </b>              
        </p>
        <p style={{padding:'5px'}}>
        <b>Chemical Title: </b>               
        </p>
        <p style={{padding:'5px'}}>
        <b>Process Description: </b>   
        <ul style={{lineHeight:'1.5'}}>
          <li>
          Provide a block diagram of the feasible process (as determined in market analysis report). Compile a list of all unit operations and process conditions.
          </li>
          <li>
Calculate the material balance for a scaled-up process plant with a daily capacity of 1000 kg. (If necessary, state assumptions to simplify the calculations.
</li>
<li>
Determine the required reactor capacity and cost. As a building material, use glass lined carbon steel (GS lined CS) (MOC). Use pressure in accordance with the reaction conditions. Only 70% of the total volume will be used. You can only fill 700 L of reaction mixture in a 1000 L reactor.
          </li>
        </ul>         
        </p>
        <p style={{padding:'5px'}}>
        <b>Capital cost (only for the reactor): </b>  
        <br/>Example:   
        <PatentTable/>          
        </p>

        <p style={{padding:'5px'}}>
        <b>References: </b>Provide reference for a research paper or an actual patent.
        <ol>
          <li style={{color:'#21AFFF'}}>
            <a style={{color:'#21AFFF'}} href='http://www.matche.com/equipcost/Reactor.html'>http://www.matche.com/equipcost/Reactor.html</a>
          </li>
        </ol> 
        <b>List the contributions of each author: </b>
        <ul>
          <li>
          Example: Authors 1 and 3 conducted a literature search to determine the reaction steps and product yield. Author 1 also calculated the cost of the reactor.
          </li>
          <li>
          Authors 2 and 3 discovered the separation steps required to achieve the desired product purity.
          </li>
        </ul>
        
        <b style={{color:'#f00'}}>
        Sign the pdf and upload.
        
        </b>

        </p>

        <TablePatentDetail />
        
    </div>
  )
}
