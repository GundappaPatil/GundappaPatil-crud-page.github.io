import "./Home.css";
import Data from "./Data";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  function handleDelete(id) {
    var idx = Data.map((e) => {
      return e.id;
    }).indexOf(id);
    Data.splice(idx, 1);
    history("/");
  }

  const handleEdit = (id, name, lastname, age) => {
    localStorage.setItem("Id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("LastName", lastname);
    localStorage.setItem("Age", age);
  };

  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data && Data.length > 0
              ? Data.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>
                        <img src={e.image} alt="error"></img>
                      </td>
                      <td>{e.name}</td>
                      <td>{e.lastname}</td>
                      <td>{e.age}</td>
                      <td>
                        <button onClick={() => handleDelete(e.id)}>Del</button>
                        &nbsp;
                        <Link to={"/Edit"}>
                          <button
                            onClick={() =>
                              handleEdit(e.id, e.name, e.lastname, e.age)
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "no data available"}
          </tbody>
        </table>
        <div className="barr">
          <Link to={"/Add"}>
            <button>Create</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
