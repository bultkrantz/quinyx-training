import classNames from "classnames";
import { useState } from "react";
import "./index.css";

//AccordionProps

const Accordion = ({ title, openDefault = false, children }) => {
  // please type the useState, even though not necessary.
  const [open, setOpen] = useState(openDefault);

  // No making this easier, use correct type for event, any not allowed
  const handleToggleAccordion = (event) => {
    setOpen(event.currentTarget.checked);
  };

  return (
    <>
      <label
        className={classNames("accordion", {
          accordion_open: open,
        })}
      >
        <input hidden type="checkbox" onChange={handleToggleAccordion} />
        {title}
      </label>
      <div
        className={classNames("accordion__panel", {
          accordion__panel_open: open,
        })}
      >
        {children}
      </div>
    </>
  );
};

export default Accordion;

