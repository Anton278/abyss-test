import { MdNearMe, MdRemove, MdAdd, MdCheck } from "react-icons/md";

import CustomSelect from "../CustomSelect";
import { zoomOptions } from "../../utils/consts";

import s from "./Header.module.scss";

type HeaderProps = {
  zoom: string;
  setZoom: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ zoom, setZoom }: HeaderProps) {
  function handleZoomIn() {
    const activeOptionIndex = zoomOptions.findIndex(
      (zoomOption) => zoomOption.value === zoom
    );

    const isLastElement = activeOptionIndex === zoomOptions.length - 1;
    if (isLastElement) {
      return;
    }

    setZoom(zoomOptions[activeOptionIndex + 1].value);
  }

  function handleZoomOut() {
    const activeOptionIndex = zoomOptions.findIndex(
      (zoomOption) => zoomOption.value === zoom
    );

    if (activeOptionIndex === 0) {
      return;
    }

    setZoom(zoomOptions[activeOptionIndex - 1].value);
  }

  return (
    <header className={s.header}>
      <div>
        <h1 className={s.title}>
          Services <span className={s.titleCounter}>0</span>
        </h1>
      </div>
      <div className={s.rightCol}>
        <button className={s.blueButton}>List View</button>
        <div className={s.tooltipWrapper}>
          <button className={s.button} id={s.goToCenterButton}>
            <MdNearMe />
          </button>
          <div className={s.tooltip}>Go to center</div>
        </div>
        <div className={s.zoomButtons}>
          <button className={s.button} onClick={handleZoomOut}>
            <MdRemove />
          </button>
          <CustomSelect
            value={zoom}
            options={zoomOptions}
            onChange={setZoom}
            activeOptionIcon={
              <MdCheck style={{ fontSize: "14px", color: "#0d47a1" }} />
            }
          />
          <button className={s.button} onClick={handleZoomIn}>
            <MdAdd />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
