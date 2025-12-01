import { useState } from "react";
import ReactQuill from "react-quill-new";
import "quill/dist/quill.bubble.css"; // ✅ correct


export default function Editor() {
  const [value, setValue] = useState<string>("");

  return (
    <div style={{ padding: 20 }}>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        placeholder="Type here..."
        style={{ height: 200, marginBottom: 90 , background: "yellow", padding: 10 }}
      />

      <h3 style={{ marginTop: 20 }}>Output:</h3>
      <div
        style={{ background: "#f0f0f0", padding: 10 }}
        dangerouslySetInnerHTML={{ __html: value }}
      />
    </div>
  );
}
