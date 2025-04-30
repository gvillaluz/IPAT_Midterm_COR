import React, { useEffect, useState, } from "react";
import axios from "axios";
import FreeTuitionImage from "./assets/FREETUITION.png";
import Header from "./components/Header";
import Student from "./components/Student";
import Subjects from "./components/Subjects";
import FeesAndRules from "./components/FeesAndRules";
import './CertificateOfRegistration.css'

const CertificateOfRegistration = () => {
  const [COR, setCOR] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({});
  const [fees, setFees] = useState({});
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const [registrationResponse, studentResponse, subjectResponse, feesResponse] = await Promise.all([
        axios.get("http://localhost:5000/api/cor"),
        axios.get("http://localhost:5000/api/student_info"),
        axios.get("http://localhost:5000/api/subjects"),
        axios.get("http://localhost:5000/api/fees")
      ]);

      setCOR(registrationResponse.data.COR)
      setStudent(studentResponse.data.student)
      setSubjects(subjectResponse.data.subjects)
      setFees(feesResponse.data.fees)
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";

      const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      setCurrentDate(formattedDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px",
    boxSizing: "border-box",
    color: "Black",
    overflowY: "scroll",
  };

  const contentStyle = {
    color: "black",
    width: "100%",
    maxWidth: "800px",
    paddingBottom: "90px",
  };

  return (

    <div style={containerStyle}>
      <div style={contentStyle}>
        <div
          className="container"
        >
          <table
            className="main-table"
          >
            <tbody>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "72.5%" }}>
                  <b>

                  </b>
                </td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
                <td colSpan={1} style={{ height: "0.1in", fontSize: "72.5%" }}></td>
              </tr>
              <tr>
                <td colSpan={2} style={{ height: "0.1in", fontSize: "62.5%" }}>
                  <b>

                  </b>
                </td>
              </tr>
              <tr>
                <Header studentProfile={student.student_profile} />
              </tr>
              <tr>
                <td colSpan={15} style={{ height: "0.3in", fontSize: "62.5%" }}>
                </td>
              </tr>
              <tr>
                <td 
                  colSpan={14}
                  className="reg-number"
                >
                  Registration No : &nbsp;
                  <span>
                      {COR.registration_no}
                  </span>
                </td>
                <td
                  colSpan={30}
                  style={{
                    height: "0.1in",
                    fontSize: "50%",
                    textAlign: "right",

                  }}
                >
                  <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                    Academic Year/Term : <span style={{ color: "red" }}>{COR.academic_year_term}</span>
                  </b>

                </td>
              </tr>
              
              <Student student={student} />
              <Subjects subjects={subjects} />

              <tr>
                <td
                  colSpan={13}
                  className="totals"
                >
                  <b>
                    <i>Note: Subject marked with
                      "*" is Special Subject.</i>
                  </b>
                </td>
                <td
                  colSpan={6}
                  className="totals"
                >
                  <b>Total Unit(s)</b>
                </td>
                <td
                  colSpan={2}
                  className="totals line"
                >
                  <b>{COR.total_lec_units}</b>
                </td>
                <td
                  colSpan={2}
                  className="totals line"
                >
                  <b>{COR.total_lab_units}</b>
                </td>
                <td
                  colSpan={2}
                  className="totals line"
                >
                  <b>{COR.total_credit_units}</b>
                </td>
                <td
                  colSpan={2}
                  className="totals line"
                >
                  <b>{COR.total_tuition}</b>
                </td>
              </tr>
              
              <FeesAndRules fees={fees} signature={COR.student_signature} approvedSignature={COR.approved_signature} />

              <tr>
                <td style={{ width: "20%", textAlign: "center" }}>
                  <img src={FreeTuitionImage} alt="EARIST MIS FEE" style={{ marginTop: "10px", width: "200px", height: "150px", marginLeft: "150px" }} />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={48}
                  className="date-container"
                >
                  {currentDate}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={48}
                  className="footer"
                >
                  KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
                </td>
              </tr>

            </tbody>

          </table>


        </div>
      </div>
    </div>

  );
};

export default CertificateOfRegistration;