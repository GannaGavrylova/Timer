import { useState, useEffect } from "react";

function ColorChangeComponent() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    if (text.length < 3) {
      setColor("green");
    } else if (text.length < 6) {
      setColor("blue");
    } else if (text.length < 8) {
      setColor("yellow");
    }
  }, [text]);

  return (
    <div style={{ backgroundColor: color }}>
      <input value={text} onChange={(event) => setText(event.target.value)} />
    </div>
  );
}
export default ColorChangeComponent;
