import React, { useEffect, useState, } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import FreeTuitionImage from "./assets/FREETUITION.png";
import Header from "./components/Header";
import Student from "./components/Student";
import Subjects from "./components/Subjects";
import FeesAndRules from "./components/FeesAndRules";

const CertificateOfRegistration = () => {
  const getEmployeeNumFromToken = () => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      const decoded = jwtDecode(token);
      console.log("Decoded Token: ", decoded);
      return decoded.employeeNumber; // Get the employeeNumber
    }
    return null;
  };

  const [COR, setCOR] = useState({});
  const [subjects, setSubjects] = useState([]);
  const [student, setStudent] = useState({});
  const [fees, setFees] = useState({});
  const [currentDate, setCurrentDate] = useState("");

  // Now filter after initializing the states
  const employeeNum = getEmployeeNumFromToken();

  //const filteredData = data.filter((item) => String(item.employeeID) === String(employeeNum));


  useEffect(() => {
    const fetchItems = async () => {
      /*try {
        const [personalinfoResponse, childrenResponse, vocationalResponse, collegeResponse] = await Promise.all([
          axios.get("http://localhost:5000/personalinfo/person_table"),
          axios.get("http://localhost:5000/childrenAPI/children_table"),
          axios.get("http://localhost:5000/vocationalinfo/vocational_table"),
          axios.get("http://localhost:5000/college/college_table"),
        ]);

        // Set original data
        setdata(personalinfoResponse.data);
        setdata2(childrenResponse.data);
        setdata3(vocationalResponse.data);
        setdata4(collegeResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }*/

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

  const handleSignatureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
    marginTop: "50px",
    color: "Black",
    overflowY: "scroll",
  };

  const contentStyle = {
    color: "black",
    width: "100%",
    maxWidth: "800px",
    paddingBottom: "90px",
  };

  console.log(fees)

  return (

    <div style={containerStyle}>
      <div style={contentStyle}>
        <div
          style={{
            border: "1px solid black",
            padding: "0.25in",
            width: "8in",
            marginBottom: "7%",
            height: "fit-content",
            position: "relative",
          }}
        >
          <table
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "8in",
              position: "relative",
              tableLayout: "fixed",
            }}
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
                <td colSpan={14} style={{ height: "0.1in", fontSize: "55%" }}>
                  <i>
                    <b style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: "black" }}>
                      Registration No:&nbsp;
                      <span style={{ color: "red" }}>
                        {COR.registration_no}
                      </span>
                    </b>
                  </i>
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
                  colSpan={10}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>
                    <i>Note: Subject marked with
                      "*" is Special Subject.</i>
                  </b>
                </td>
                <td
                  colSpan={8}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>Total Unit(s)</b>
                </td>
                <td
                  colSpan={1}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_lec_units}</b>
                </td>
                <td
                  colSpan={1}
                  style={{
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                </td>
                <td
                  colSpan={1}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_lab_units}</b>
                </td>
                <td
                  colSpan={1}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_credit_units}</b>
                </td>
                <td
                  colSpan={2}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                </td>
                <td
                  colSpan={2}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  <b>{COR.total_tuition}</b>
                </td>
                <td
                  colSpan={3}
                  style={{
                    height: "0.1in",
                    fontSize: "55%",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                </td>
              </tr>
              <tr
                colSpan={12}
                style={{
                  color: "white",
                  height: "0.1in",
                  fontSize: "62.5%",
                  backgroundColor: "gray",
                  textAlign: "center",
                }}
              >
              </tr>
              
              <FeesAndRules fees={fees} signature={COR.student_signature} approvedSignature={COR.approved_signature} />

              <tr>
                <td style={{ width: "20%", textAlign: "center" }}>
                  <img src={FreeTuitionImage} alt="EARIST MIS FEE" style={{ marginTop: "10px", width: "200px", height: "150px", marginLeft: "150px" }} />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={47}
                  style={{
                    height: "0.25in",
                    fontSize: "62.5%",
                    textAlign: "right",
                    textAlign: "right",
                    verticalAlign: "middle", // Centers vertically
                  }}
                >
                  <input
                    type="text"
                    value={currentDate}
                    readOnly
                    style={{
                      color: "black",
                      textAlign: "right", // Centers text inside the input
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={47}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{ color: "black", textAlign: "center", display: "block" }}>
                      KEEP THIS CERTIFICATE. YOU WILL BE REQUIRED TO PRESENT THIS IN ALL YOUR DEALINGS WITH THE COLLEGE.
                    </i>
                  </b>
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