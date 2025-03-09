import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { dataAccordion } from './datasetAccordion';

export function AccordionsHinos() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {dataAccordion?.map((vl, index) => {
        return (
          <>
            <Accordion
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}bh-content`}
                id={`panel${index + 1}bh-header`}
              >
                <Typography
                  component="span"
                  sx={{ width: '80%', flexShrink: 0 }}
                >
                  {vl.titulo}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {vl?.hino?.map((trecho) => {
                  if (!trecho) {
                    return <br />;
                  }
                  return (
                    <>
                      <Typography>{trecho}</Typography>
                    </>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );
}
