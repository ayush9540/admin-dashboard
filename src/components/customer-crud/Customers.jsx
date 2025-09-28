import { useState, useEffect } from "react";

const Customers = () => {
  const url = "https://688bad902a52cabb9f528ee0.mockapi.io/user/v1/customers";

  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  async function getData() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`);
      }
      const json = await res.json();
      if (!Array.isArray(json)) {
        throw new Error("API did not return a list");
      }
      setData(json);
    } catch {
      setError("Data can't be fetched!");
      setData([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <>
          <ul>
            {data?.map((customer) => {
              return <li key={customer.id}>{customer.name}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
export default Customers;
