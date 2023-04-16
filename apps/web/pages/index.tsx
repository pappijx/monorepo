import { Button, TopNav } from "ui";

export default function Web() {
  return (
    <div>
      <TopNav logo="http://via.placeholder.com/640x360" logoText="Logo" />
      <h1>Web</h1>
      <p className="font-bold">hello</p>
      <Button onClick={() => console.log("hello")}>Hello</Button>
    </div>
  );
}
