import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Ascn({item}) {
  return (
        <div className='container-padding-x'>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography className='bg-[#EBEEF4] rounded-full flex justify-center items-center min-h-[40px] min-w-[40px]'>{item.id}</Typography>
          <Typography className='flex justify-center items-center' variant="h5" sx={{color:'#2F3241',paddingLeft:'10px',fontSize:'20px',fontWeight:'500'}}>{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
  );
}