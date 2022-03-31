import classNames from "classnames";
import { FC, MouseEvent, useState } from "react";
import "./index.css";

type AccordionProps = {
  openDefault?: boolean;
  title: string;
};

const Accordion: FC<AccordionProps> = ({
  title,
  openDefault = false,
  children,
}) => {
  const [open, setOpen] = useState(openDefault);

  // No making this easier, use correct type for event, any not allowed
  const handleToggleAccordion = (e: MouseEvent<HTMLInputElement>) => {
    setOpen(e.currentTarget.checked);
  };

  return (
    <>
      <input
        className={classNames("accordion", {
          accordion_open: open,
        })}
      >
        <input hidden type="checkbox" onClick={handleToggleAccordion} />
        {title}
      </input>
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

