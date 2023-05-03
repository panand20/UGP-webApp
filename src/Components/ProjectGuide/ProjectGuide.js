import React from 'react'
import './guide.css'
import Typography from '@mui/joy/Typography';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import Checkbox from '@mui/joy/Checkbox';
import table from './table.png'
export default function ProjectGuide() {
  return (
    <div className='project-guide-main'>
        <h1>CHE261A Project Guideline</h1>
        <p style={{padding:'5px', textAlign:'center'}}>
        You will incorporate virtual companies for this project. The following organisational structure will be used by each company. Each company (including the CEO) will have 12 to 20 employees.
        </p>

        <center><img src={table} /></center>

        <div style={{paddingLeft:'15px'}}>
        <p>
        Each company will engage in the following activities:
        </p>

        <ul style={{color: '#828384', padding:'1% 1% 1% 1%', lineHeight:'1.8'}}>
            <li>
            Management: The CEO will oversee each of the steps outlined below.
            </li><br/>
            <li>
            Market research: Identify high-value chemicals that can be manufactured in India. You will screen at least three such chemicals before deciding on one. These chemicals will not be obtained in bulk. They'd be fine or specialty chemicals. It will not be a consumer item. Some examples include intermediates used in agriculture, pharmaceuticals, paint, surfactants, perfume, and cosmetics. When finalising, you will consider profitability, raw material availability, and safety. (Some useful resources include reports on the chemical industry available from https://chemicals.gov.in, https://www.ibef.org/, http://cpmaindia.com, KPMG, and others). Obtain material input and product costs from the internet (e.g. Zauba which tracks import and export data)
            </li><br/>
            <li>
            R&D - chemical synthesis: From lab-scale research available on the internet, the R&D team will develop chemical reactions and separation steps. The R&D team will provide the chemicals needed, as well as the purity and yield of the product that can be achieved. Patents and research articles will be collected as evidence. (Scifinder; register an account using IITK address, Google Scholar/Patents)
            </li><br/>
            <li>
            Technical services: Consults with the R&D team, the market analysis team, and management. The design team will create a block diagram for the scaled-up process, conduct material balance, and identify unit operations and operating conditions. The plant's capacity would be 1000 kg of product per day. The technical services team will also assess the estimated capital cost (you can use this as a reference). http://www.matche.com/equipcost/Default.html).
            </li><br/>
            <li>
            Environment, Health, and Safety (EHS): Using input from the technical services team, the EHS team will identify safety concerns, estimate waste generation, and propose a plan to monitor and treat waste to environmentally benign compounds for disposal.
            </li><br/>
            <li>
            Although these tasks appear to be sequential, it is necessary that all team members coordinate and work simultaneously.
            </li><br/>
        </ul>
        <Typography level="h3" sx={{color:'#828384', textAlign:'center'}}>Important milestones</Typography>

        </div>
{/* Stepper */}
        <div class="container">
 
    <div class="step completed">
      <div class="v-stepper">
        <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <Typography style={{color: '#828384', lineHeight:'2.3'}}>Form a corporation. You will receive Rs 250 in virtual coins. As a CEO cost, 100 coins per week will be deducted.
      <br/>
      <Typography sx={{color:'#000'}}>Due date: 20th March 18:00.</Typography>
      <br/>
      Registration form: <a style={{color:'#21AFFF'}} href="https://forms.gle/cnfmBbtMR8dBJUYGA"> https://forms.gle/cnfmBbtMR8dBJUYGA </a>
      <br/>
      Responsible division for this task: CEO/Management</Typography>
      </div>
  </div>
  
  <div class="step completed">
    <div class="v-stepper">
    <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
      <div class="line"></div>
    </div>

    <div class="content">
    <Typography style={{color: '#828384', lineHeight:'2.3'}}> Registered businesses can merge with others without jeopardising the total team strength. There is only one opportunity to merge teams. No coins will be transferred. On merger, a penalty of 100 coins will be imposed. Companies that have already registered a team are ineligible for merger.
    <br/>
      <Typography sx={{color:'#000'}}>Due date: 24th March 23:59.</Typography>
      <br/>
      
 
      Email the merger details to <a style={{color:'#21AFFF'}} href="mailto:ragipani@iitk.ac.in"> ragipani@iitk.ac.in</a>
       <br/>
      Responsible division for this task: CEO/Management</Typography>
    </div>
  </div>
  
  <div class="step completed">
      <div class="v-stepper">
      <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <Typography style={{color: '#828384', lineHeight:'2.3'}}>Register your company's organisational structure. You will receive 200 coins for each member of your team (other than the CEO). Salaries for your employees will be deducted at the rate of 80 coins per person per week.
      
      <br/>
      <Typography sx={{color:'#000'}}>Due date: 25th March 23:59.</Typography>
      <br/>
 
      Fill the template and upload here: <a style={{color:'#21AFFF'}} href='https://forms.gle/sck7bAsHDjqfKCYA9'>https://forms.gle/sck7bAsHDjqfKCYA9</a> 
       <br/>
      Responsible division for this task: CEO/Management</Typography>
      </div>
  </div>
  

  <div class="step completed">
      <div class="v-stepper">
      <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <Typography style={{color: '#828384', lineHeight:'2.3'}}>
      Obtain a patent for your chemicals (minimum 1- maximum 3) - first-come, first-served (You will get 1500 coins for each chemical registered).
      
      <br/>
      <Typography sx={{color:'#000'}}>Due date: 5th April 2023 by 23:59</Typography>
      <br/>
      
 
      Fill the template and upload here: <a style={{color:'#21AFFF'}} href="https://forms.gle/CbJmiiAyWScW26Rd6">https://forms.gle/CbJmiiAyWScW26Rd6</a>
       <br/>
      Responsible division for this task: R&D</Typography>
      </div>
  </div>
  <div class="step completed">
      <div class="v-stepper">
      <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <Typography style={{color: '#828384', lineHeight:'2.3'}}>
      Submit a market analysis report for the patented chemicals (minimum one and maximum two) (You will get 1500 coins for each market analysis report). You will conduct trade research and economic feasibility analysis based on input-output material costs.
      
      <br/>
      <Typography sx={{color:'#000'}}>Due date: 6th April 2023 by 23:59</Typography>
      <br/>
      
 
      Fill the template and upload here: <a style={{color:'#21AFFF'}} href=" https://forms.gle/EQnEwGYsECp8nvR3A"> https://forms.gle/EQnEwGYsECp8nvR3A</a>
       <br/>
       Responsible division for this task: Market Analysis</Typography>
       
      </div>
  </div>

  <div class="step completed">
      <div class="v-stepper">
      <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
        <div class="line"></div>
      </div>

      <div class="content">
      <Typography style={{color: '#828384', lineHeight:'2.3'}}>
      Your method should be protected by a patent (min 1 - max 2) (You will receive 2500 coins for each technically feasible block diagram); Apply for a process patent for the chemical you patented in the previous step. Only one process patent will be issued for each chemical. You will also provide reactor pricing.
      
      <br/>
      <Typography sx={{color:'#000'}}>Due date: 9th April 2023 by 23:59</Typography>
      <br/>
      
 
      Fill the template and upload here: <a style={{color:'#21AFFF'}} href="https://forms.gle/wm3HLsYBTcNzyoA37">https://forms.gle/wm3HLsYBTcNzyoA37</a>
       <br/>
       Responsible division for this task: CEO/Management</Typography>

      </div>
  </div>

  <div class="step completed">
      <div class="v-stepper">
      <div class=""><RadioButtonCheckedOutlinedIcon sx={{color: "#22D1EE", fontSize:'30px'}} /></div>
        <div class=""></div>
      </div>

      <div class="content">
      <Typography style={{color: '#828384', lineHeight:'2.3'}}>
      For the best process, apply for environmental clearance by submitting an EHS report (You will get Rs. 1500 for a valid                      application).
      
      <br/>
      <Typography sx={{color:'#000'}}>Due date: 10th April 2023 by 23:59</Typography>
      <br/>
      
 
      Fill the template and upload here: <a style={{color:'#21AFFF'}} href="https://forms.gle/MEHHdMYg7ahMhS1x7">https://forms.gle/MEHHdMYg7ahMhS1x7</a>
       <br/>
       Responsible division for this task: EHS</Typography>
      </div>
  </div>
  
</div>

    <p style={{color: '#828384', padding:'1% 1% 0% 2%', lineHeight:'1.8'}}>
    The game will end at 23:59 on April 10, 2023. All reports must be signed by the authors and clearly state their contribution. The CEO has the ability to upload reports prepared by the company's divisions. Employee costs will be deducted for all teams for three weeks.
    </p>
    <p style={{color: '#828384', padding:'0% 1% 0% 2%', lineHeight:'1.8'}}>
    Company with highest virtual money wins. Top two winning companies will get surprise rewards.
    </p>
    <p style={{ padding:'0% 1% 1% 2%', lineHeight:'2'}}>

Grading will be out of (maximum marks) 20.
<br/>

CEO: If the company meets all of the above milestones, it will receive 15 points. 5 points for overall earnings and productivity.
<br/>
Employee: 8 points for personal contribution. Another 8 points for the performance of your company's sub-division (say, technical services). Four points for overall company performance.

    </p>

    <p style={{paddingBottom:'5%', textAlign:'center'}}>
    <Checkbox sx={{paddingRight:'3%'}} label="I have read the guidelines and promise to follow them honestly." />
 
    </p>
    </div>
  )
}
