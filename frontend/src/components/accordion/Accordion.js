import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NewAccordion(props) {
  const { wrapText, content, id, onPanelChange, expanded } = props;

  return (
    <div>
      <Accordion expanded={expanded} onChange={onPanelChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id={id}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {wrapText}
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
