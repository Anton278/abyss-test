import { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdAdd,
  MdEdit,
  MdClose,
} from "react-icons/md";

import Header from "./components/Header";

import s from "./App.module.scss";

function App() {
  const [zoom, setZoom] = useState("100");
  const [data, setData] = useState([
    {
      name: "Category 1",
      children: [{ name: "sub category 1" }, { name: "sub category 2" }],
    },
    {
      name: "Category 2",
    },
    {
      name: "Category 3",
    },
  ]);

  return (
    <>
      <Header zoom={zoom} setZoom={setZoom} />
      <main className={s.main}>
        <button className={s.scrollBtn}>
          <MdChevronLeft />
        </button>
        <button className={s.scrollBtn}>
          <MdChevronLeft className={s.chevronTop} />
        </button>
        <button className={s.scrollBtn}>
          <MdChevronRight />
        </button>
        <button className={s.scrollBtn}>
          <MdChevronRight className={s.chevronBottom} />
        </button>
        <div className={s.tree}>
          <ul>
            <li>
              <div className={s.node}>
                <p>Categories</p>
                <div className={s.nodeActions}>
                  <button>+</button>
                </div>
              </div>
              <ul>
                <li>
                  <div className={s.node}>
                    <p>Category 1</p>
                    <div className={s.nodeActions}>
                      <button>+</button>
                      <button>Edit</button>
                      <button>-</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className={s.node}>
                        <p>Sub Category 1</p>
                        <div className={s.nodeActions}>
                          <button>+</button>
                          <button>Edit</button>
                          <button>-</button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={s.node}>
                        <p>Sub Category 2</p>
                        <div className={s.nodeActions}>
                          <button>+</button>
                          <button>Edit</button>
                          <button>-</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className={s.node}>
                    <p>Category 2</p>
                    <div className={s.nodeActions}>
                      <button>+</button>
                      <button>Edit</button>
                      <button>-</button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={s.node}>
                    <p>Category 3</p>
                    <div className={s.nodeActions}>
                      <button>+</button>
                      <button>Edit</button>
                      <button>-</button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
