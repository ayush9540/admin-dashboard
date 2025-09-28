import Cards from "../cards/Cards";
import BasicTable from "../table/Table";
import "./MainDashboard.css";

const MainDashboard = () => {
  function createData(name, trackingId, age, status) {
    return { name, trackingId, age, status };
  }

  const user = JSON.parse(localStorage.getItem("currentUser")) || null

  const dashboardRows = [
    createData("Andrew Flintoff", 18908424, "23", "Approved"),
    createData("James Anderson", 18908424, "31", "Pending"),
    createData("Ironman Superstart", 18908424, "46", "Approved"),
    createData("Tom Cruise", 18908421, "57", "Delivered"),
  ];

  return (
    <div className="main-dash">
      <h1 className="text-center">{`Welcome, ${
        user?.name.charAt(0).toUpperCase() + user?.name.slice(1) + " !" ||
        "User"
      }`}</h1>
      <Cards />
      <BasicTable title="Recent Orders" rows={dashboardRows}/>
      <BasicTable title="Previous Orders" rows={dashboardRows}/>
      <BasicTable title="Pending Orders" rows={dashboardRows}/>
    </div>
  );
};
export default MainDashboard;
