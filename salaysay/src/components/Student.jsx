const Student = ({ student }) => {
    return (
        <>
            <tr>
                <td
                  colSpan={48}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    backgroundColor: "gray",
                    color: "white",
                  }}
                >
                  <b>
                    <i style={{
                      color: "black", fontFamily: 'Arial, sans-serif',
                      fontSize: '12px', textAlign: "center", display: "block"
                    }}>
                      STUDENT GENERAL INFORMATION
                    </i>
                  </b>
                </td>
              </tr>
              <tr>

              </tr>
              <td
                colSpan={6}
              >
                <input
                  type="text"
                  value={"Student No:"}
                  style={{
                    fontWeight: "bold",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    color: "black",
                    width: "98%",
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={15}
              >
                <input
                  type="text"
                  value={student.student_no}
                  style={{
                    fontFamily: "Arial",
                    color: "black",
                    width: "98%",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={6}
              >
                <input
                  type="text"
                  value={"College:"}
                  style={{
                    fontWeight: "Bold",
                    color: "black",
                    width: "98%",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    border: "none",
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <td
                colSpan={15}
              >
                <input
                  type="text"
                  value={student.college}
                  style={{
                    color: "black",
                    width: "98%",
                    border: "none",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    outline: "none",
                    background: "none"
                  }}
                />
              </td>
              <tr>
                <td
                  colSpan={6}
                >
                  <input
                    type="text"
                    value={"Name:"}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      fontWeight: "bold",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    value={student.student_name}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={6}
                >
                  <input
                    type="text"
                    value={"Program:"}
                    style={{
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontWeight: "Bold",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={16}
                >
                  <input
                    type="text"
                    value={student.program}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                >
                  <input
                    type="text"
                    value={"Gender :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    value={student.gender}
                    style={{
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={12}
                >
                  <input
                    type="text"
                    value={"Major:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>

                <td
                  colSpan={7}
                >
                  <input
                    type="text"
                    value={"Curriculum:"}
                    style={{
                      color: "black",
                      width: "98%",
                      fontWeight: "Bold",
                      border: "none",
                      textAlign: "left",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={7}
                >
                  <input
                    type="text"
                    value={student.curriculum}
                    style={{
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      textAlign: "left",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                >
                  <input
                    type="text"
                    value={"Age :"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={15}
                >
                  <input
                    type="text"
                    value={student.age}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={4}
                >
                  <input
                    type="text"
                    value={"Year Level:"}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={8}
                >
                  <input
                    type="text"
                    value={student.year_level}
                    style={{
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={12}
                >
                  <input
                    type="text"
                    value={`Scholarship/Discount : ${student.scholarship_discount}`}
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      width: "98%",
                      border: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      outline: "none",
                      background: "none"
                    }}
                  />

                </td>
              </tr>
              <tr>
                <td
                  colSpan={6}
                >
                  <input
                    type="text"
                    value={"Email Address:"}
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                  />
                </td>
                <td
                  colSpan={20}
                >
                  <input
                    type="text"
                    value={student.email_address}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '12px',
                      background: "none"
                    }}
                  />
                </td>
              </tr>
        </>
    )
}

export default Student;