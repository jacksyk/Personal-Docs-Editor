import "./styles/global.scss";

import { IconEdit, IconFile, IconGithub } from "@arco-design/web-react/icon";
import { cs } from "doc-editor-utils";
import { useState } from "react";
import ReactDOM from "react-dom";

import { SlateDocEditor } from "./components/editor";
import { ThemeAction } from "./components/theme";

export const App: React.FC = () => {
  const [readonly, setRender] = useState(false);

  return (
    <div className="doc-editor-container">
      <div className="header">
        <span className="left">Slogan</span>
        <div className="right">
          <div onClick={() => setRender(!readonly)}>
            {readonly ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconEdit />
                <span>编辑</span>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IconFile />
                <span>浏览</span>
              </div>
            )}
          </div>

          <ThemeAction />
        </div>
      </div>
      <div className="gap"></div>
      <div className={cs("editor", readonly && "render")}>
        <div className="slate-editor">
          <SlateDocEditor readonly={readonly}></SlateDocEditor>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
