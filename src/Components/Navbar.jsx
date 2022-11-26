import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [array, setArray] = useState([]);
  const [newAry, setNewAry] = useState({
    fname: "",
    lname: "",
    username: "",
    empid: "",
    contactno: "",
    department: "",
    email: "",
    date: "",
    company: "",
    role: "",
  });

  const changes = (event) => {
    const { name, value } = event.target;
    setNewAry((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  function submitData(e) {
    e.preventDefault();
    const obj = {
      fname: newAry.fname,
      lname: newAry.lname,
      username: newAry.username,
      empid: newAry.empid,
      contactno: newAry.contactno,
      department: newAry.department,
      email: newAry.email,
      date: newAry.date,
      company: newAry.company,
      role: newAry.role,
    };
    setArray([...array, obj]);

    setButtonPopup(false);

    console.log(setArray);
    setNewAry({
      fname: "",
      lname: "",
      username: "",
      empid: "",
      contactno: "",
      department: "",
      email: "",
      date: "",
      company: "",
      role: "",
    });
  }


  return (
    <div className="main">
      <nav>
        <div className="navbar">
          <h3>Employee</h3>
          <div className="rightBtn">
            <button>...</button>
            <button>---</button>
            <button onClick={() => setButtonPopup(true)}>+Add Employee</button>
          </div>
        </div>
      </nav>

      <div className="container-fliud">
        {buttonPopup ? (
          <div>
            <div className="form">
              <div className="heading">
                <button onClick={() => setButtonPopup(false)}>x</button>
                <h3>Add Employe</h3>
              </div>
              <form>
                <div className="parts">
                  <div className="leftSide">
                    <label htmlFor="">FirstName</label>
                    <input id="fname"
                      type="text"
                      name="fname"
                      onChange={changes}
                      value={newAry.fname}
                    />
                    <label htmlFor="">UserName</label>
                    <input id="userName"
                      type="text"
                      name="username"
                      onChange={changes}
                      value={newAry.username}
                    />
                    <label htmlFor="">EmployeId</label>
                    <input id="empId"
                      type="text"
                      name="empid"
                      onChange={changes}
                      value={newAry.empid}
                    />
                    <label htmlFor="">contactNo</label>
                    <input id="contactNo"
                      type="text"
                      name="contactno"
                      onChange={changes}
                      value={newAry.contactno}
                    />
                    <label htmlFor="">DepartMent</label>
                    <input id="department"
                      type="text"
                      name="department"
                      onChange={changes}
                      value={newAry.department}
                    />
                  </div>
                  <div className="rightSide">
                    <label htmlFor="">LastName</label>
                    <input id="lname"
                      type="text"
                      name="lname"
                      onChange={changes}
                      value={newAry.lname}
                    />
                    <label htmlFor="">Email</label>
                    <input id="email"
                      type="text"
                      name="email"
                      onChange={changes}
                      value={newAry.email}
                    />
                    <label htmlFor="">JoinDate</label>
                    <input id="joinDate"
                      type="date"
                      name="date"
                      onChange={changes}
                      value={newAry.date}
                    />
                    <label htmlFor="">Company</label>
                    <input id="company"
                      type="text"
                      name="company"
                      onChange={changes}
                      value={newAry.company}
                    />
                    <label htmlFor="">Designation</label>
                    <input id="role"
                      type="text"
                      name="role"
                      onChange={changes}
                      value={newAry.designation}
                    />
                  </div>
                </div>
                <center>
                  <button type="submit" onClick={submitData} className="button">
                    Submit
                  </button><span id="btnsubmit"></span>
                </center>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}

        <table>
          <thead className="thead">
            <tr>
              <th>Name</th>
              <th>EmployeId</th>
              <th>Email</th>
              <th>Contactno</th>
              <th>Date</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
              <tr>
                <td>Nirbhay</td>
                <td>FT-0001</td>
                <td>nirbhay@gmial.com</td>
                <td>9875994785</td>
                <td>13-MAY-2022</td>
                <td>Web devloper</td>
              </tr>   
              <tr>
                <td>Nirbhay</td>
                <td>FT-0001</td>
                <td>nirbhay@gmial.com</td>
                <td>9875994785</td>
                <td>13-MAY-2022</td>
                <td>Web devloper</td>
              </tr>   
              <tr>
                <td>Nirbhay</td>
                <td>FT-0001</td>
                <td>nirbhay@gmial.com</td>
                <td>9875994785</td>
                <td>13-MAY-2022</td>
                <td>Web devloper</td>
              </tr>   
              <tr>
                <td>Nirbhay</td>
                <td>FT-0001</td>
                <td>nirbhay@gmial.com</td>
                <td>9875994785</td>
                <td>13-MAY-2022</td>
                <td>Web devloper</td>
              </tr>   
              <tr>
                <td>Nirbhay</td>
                <td>FT-0001</td>
                <td>nirbhay@gmial.com</td>
                <td>9875994785</td>
                <td>13-MAY-2022</td>
                <td>Web devloper</td>
              </tr>   
              <tr>
                <td>Nirbhay</td>
                <td>FT-0001</td>
                <td>nirbhay@gmial.com</td>
                <td>9875994785</td>
                <td>13-MAY-2022</td>
                <td>Web devloper</td>
              </tr>   
               
            {array.map((i) => {
              return (
                <tr>
                  <td>
                    {i.fname}
                    {i.lname}
                  </td>
                  <td>{i.empid}</td>
                  <td>{i.email}</td>
                  <td>{i.contactno}</td>
                  <td>{i.date}</td>
                  <td>{i.role}</td>
                </tr>
              );
            })}
            {/* <td>ig wiht</td>
              <td>Nirbhay</td>
              <td>nirbhay@gmial.com</td>
              <td>9872478230</td>
              <td>09-apr-2022</td>
              <td>Web devloper</td> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Navbar;
