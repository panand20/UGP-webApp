import React from 'react'
import './guide.css'
import Typography from '@mui/joy/Typography';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import Checkbox from '@mui/joy/Checkbox';
import Table from '@mui/joy/Table';
import PatentTable from './PatentTable';
import EnvironmentTable from './EnvironmentTable';
// import TablePatentDetail from './TablePatentDetail';

export default function MarketAnalysis() {
  return (
    <div className='project-guide-main'>
        <h1>Market Analysis Report</h1>
       
        <p style={{padding:'5px'}}>
        <b>Application: </b>Your Company Name       
        </p>
        <p style={{padding:'5px'}}>
        <b>CEO: </b>CEO'S name      
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
        <b>Use case: </b>   
        <ul style={{lineHeight:'1.5'}}>
          <li>
          What is the purpose of this substance?
          </li>
          <li>
Are there any substitutes for this compound? Just a few examples.
</li><li>
What makes this compound superior to others?
</li><li>
Is this compound manufactured in India? What is the size of imports?
                  </li>
        </ul>         
        </p>
       

        <p style={{padding:'5px'}}>
        <b>References: </b>Give a link to a material safety data sheet/industrial safety report/website.
        {/* <ol>
          <li style={{color:'#21AFFF'}}>
            <a style={{color:'#21AFFF'}} href='http://www.matche.com/equipcost/Reactor.html'>http://www.matche.com/equipcost/Reactor.html</a>
          </li>
        </ol>  */}
        <br/>
        <br/>
        <b>Economic feasibility: </b>
        <ul>
          <li>
          What raw materials are required for its synthesis (as stated in the Patent application)?           </li>
          <li>
          Provide preliminary economic feasibility based on raw material and solvent costs, as well as product selling price.          </li>
        </ul>

        <b>List the contributions of each author: </b>
        <ul>
          <li>
          For example, authors 1 and 2 conducted market research for chemical trade data.
          </li><li>
          Authors 2 and 3 wrote the use case.
          </li>
          <li>
          Author 4 considered economic feasibility.
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
