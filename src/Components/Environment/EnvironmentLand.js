import React from 'react'
import './guide.css'
import Typography from '@mui/joy/Typography';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import Checkbox from '@mui/joy/Checkbox';
import Table from '@mui/joy/Table';
import PatentTable from './PatentTable';
import EnvironmentTable from './EnvironmentTable';
// import TablePatentDetail from './TablePatentDetail';

export default function EnvironmentLand() {
  return (
    <div className='project-guide-main'>
        <h1>CHE261A Environmental Clearance</h1>
       
        <p style={{padding:'5px'}}>
        <b>Application: </b>Your Company Name       
        </p>
        <p style={{padding:'5px'}}>
        <b>Inventors: </b>Names will be listed in the order of contribution (the name of the highest contributor will be listed first). The authors must be listed in the Technical Services division.)       
        </p>
        <p style={{padding:'5px'}}>
        <b>Chemical Product Formula:: </b>              
        </p>
        <p style={{padding:'5px'}}>
        <b>Chemical Product Name:: </b>              
        </p>
        <p style={{padding:'5px'}}>
        <b>Process Title: </b>               
        </p>
        <p style={{padding:'5px'}}>
        <b>EHS Summary: </b>   
        <ul style={{lineHeight:'1.5'}}>
          <li>
          List the wastes produced and the quantity produced.          </li>
          <li>
          What are the current regulations for the aforementioned waste materials? (Restrictions on how it can be disposed of in the environment)</li>
<li>
Using a block diagram, describe the waste treatment procedure. Your chemical plant must have no liquid discharge.
</li><li>
Are there any concerns about the chemicals' safety? Give time weighted average (TWA) exposure limits for 8 hours and short-term exposure limits (STEL) for 15 minutes.          </li>
        </ul>         
        </p>
       

        <p style={{padding:'5px'}}>
        <b>References: </b>Give a link to a material safety data sheet/industrial safety report/website.
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

        <EnvironmentTable/>
        
    </div>
  )
}
