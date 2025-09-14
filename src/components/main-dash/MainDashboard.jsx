import Cards from "../cards/Cards";
import Table from "../table/Table";
import "./MainDashboard.css";
const MainDashboard = () => {
    return (
        <div className="main-dash">
            <h1>Dashboard</h1>
            <Cards/>
            <Table title="Recent Orders"/>
            <Table title="Previous Orders"/>
            <Table title="Pending Orders"/>
        </div>
    )
}
export default MainDashboard