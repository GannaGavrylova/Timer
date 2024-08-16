import { useEffect } from "react";
function Component() {
  useEffect(() => {
    console.log("Компонент обновлен");
  }, []);
  return (
    <div>
      <h1>Hello, word!</h1>
    </div>
  );
}
export default Component;
