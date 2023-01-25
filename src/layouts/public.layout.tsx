import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="container mx-auto">
      <button className="btn">Button</button>
      <Outlet />
    </div>
  );
}
