import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <div>
      <Helmet title="Painel do Admin" />
      <h1>Dashboard</h1>
    </div>
  );
}
