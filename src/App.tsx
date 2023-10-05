import { useState } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdAdd,
  MdEdit,
  MdClose,
  MdCancel,
  MdCheck,
} from "react-icons/md";

import Header from "./components/Header";

import s from "./App.module.scss";
import { generateNum } from "./utils/generateNum";

type TreeNode = {
  name: string;
  children?: TreeNode[];
};

function App() {
  const [zoom, setZoom] = useState("100");
  const [data, setData] = useState<TreeNode[]>([]);
  const [inputVal, setInputVal] = useState("");

  function getTree(data: any[]) {
    if (!data.length) {
      return null;
    }

    const res = (
      <ul>
        {data.map((node, i) => {
          const key = generateNum.next().value as number;

          let childrenNodes;
          if (node.children) {
            childrenNodes = getTree(node.children);
          }

          return (
            <li key={i}>
              <div className={s.node}>
                {node.name ? (
                  <p>{node.name}</p>
                ) : (
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />
                )}
                <div className={s.nodeActions}>
                  {node.name ? (
                    <>
                      <button className={s.nodeActionButton}>
                        <MdAdd />
                      </button>
                      <button className={s.nodeActionButton}>
                        <MdEdit />
                      </button>
                      <button
                        className={[s.nodeActionButton, s.redBackground].join(
                          " "
                        )}
                        onClick={() => deleteNode(i)}
                      >
                        <MdClose />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={[
                          s.nodeActionButton,
                          s.yellowBackground,
                        ].join(" ")}
                        onClick={() => cancelAddNode(i)}
                      >
                        <MdClose />
                      </button>
                      <button
                        className={[s.nodeActionButton, s.greenBackground].join(
                          " "
                        )}
                        onClick={() => approveAddNode(i)}
                      >
                        <MdCheck />
                      </button>
                    </>
                  )}
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

  function addChildNode() {
    setData([...data, { name: "" }]);
  }
  function cancelAddNode(rmIndex: number) {
    setData((oldData) => oldData.filter((_, i) => i !== rmIndex));
  }
  function approveAddNode(addingNodeIndex: number) {
    setData((oldData) =>
      oldData.map((node, i) =>
        i === addingNodeIndex ? { name: inputVal } : node
      )
    );
    setInputVal("");
  }
  function deleteNode(deleteingNodeIdx: number) {
    setData((oldData) => oldData.filter((_, i) => i !== deleteingNodeIdx));
  }

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
                  <button
                    className={s.nodeActionButton}
                    onClick={() => addChildNode()}
                  >
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
