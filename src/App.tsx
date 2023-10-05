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
import { generateNum } from "./utils/generateNum";

function App() {
  const [zoom, setZoom] = useState("100");
  const [data, setData] = useState([
    {
      name: "Category 1",
      children: [
        { name: "sub category 1", children: [{ name: "sub sub category 1" }] },
        { name: "sub category 2" },
      ],
    },
    {
      name: "Category 2",
    },
    {
      name: "Category 3",
    },
  ]);

  function getTree(data: any[]) {
    const res = (
      <ul>
        {data.map((node) => {
          const key = generateNum.next().value as number;

          let childrenNodes;
          if (node.children) {
            childrenNodes = getTree(node.children);
          }

          return (
            <li key={key}>
              <div className={s.node}>
                <p>{node.name}</p>
                <div className={s.nodeActions}>
                  <button className={s.nodeActionButton}>
                    <MdAdd />
                  </button>
                  <button className={s.nodeActionButton}>
                    <MdEdit />
                  </button>
                  <button
                    className={[s.nodeActionButton, s.redBackground].join(" ")}
                  >
                    <MdClose />
                  </button>
                </div>
              </div>
              {childrenNodes}
            </li>
          );
        })}
      </ul>
    );

    return res;
  }

  const tree = getTree(data);

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
              <div className={[s.topNode, s.node].join(" ")}>
                <p>Categories</p>
                <div className={s.nodeActions}>
                  <button className={s.nodeActionButton}>
                    <MdAdd />
                  </button>
                </div>
              </div>
              {tree}
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
