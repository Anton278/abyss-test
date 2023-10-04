import { useState, useEffect, useRef } from "react";

import s from "./CustomSelect.module.scss";

type Option = {
  value: string;
  label: string | JSX.Element;
};

type CustomSelectProps = {
  options: Option[];
  onChange: (value: string) => void;
  value: string;
  activeOptionIcon?: JSX.Element;
};

function CustomSelect(props: CustomSelectProps) {
  const { options, onChange, value, activeOptionIcon } = props;

  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const activeOption = options.find((option) => option.value === value);

  useEffect(() => {
    /* close select on click outside */
    function clickHandler(e: MouseEvent) {
      if (!selectRef.current) {
        return;
      }

      if (!selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div className={s.customSelect} ref={selectRef}>
      <button className={s.customSelectHead} onClick={() => setOpen(!open)}>
        {activeOption?.label}
      </button>
      <div
        className={[
          s.customSelectBody,
          open ? s.customSelectBodyOpen : "",
        ].join(" ")}
      >
        {options.map((option, i) => (
          <button
            className={s.customSelectOption}
            key={i}
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
          >
            {option.label}
            {activeOptionIcon
              ? option.value === value
                ? activeOptionIcon
                : null
              : null}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CustomSelect;
