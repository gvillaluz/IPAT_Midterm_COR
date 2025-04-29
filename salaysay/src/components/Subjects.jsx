import './Subjects.css'

const Subjects = ({ subjects }) => {
    return (
        <>
            <tr>
                <td
                  colSpan={5}
                  rowSpan={2}
                  className="subject-header"
                >
                  CODE
                </td>
                <td
                  colSpan={14}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SUBJECT TITLE
                </td>

                <td
                  colSpan={8}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  UNIT
                </td>

                <td
                  colSpan={5}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SECTION
                </td>
                <td
                  colSpan={8}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontSize: "12px",
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  SCHEDULE/ROOM

                </td>
                <td
                  colSpan={8}
                  rowSpan={2}
                  style={{
                    color: "black",
                    height: "0.3in",
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: "bold",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  FACULTY
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lec
                </td>

                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Lab
                </td>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Credit
                </td>
                <td
                  colSpan={2}
                  style={{
                    color: "black",
                    height: "0.1in",
                    fontSize: "50%",
                    backgroundColor: "gray",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Tuition
                </td>
            </tr>
              {subjects.map((subject, index) => {
                return (
                  <tr key={index}>
                    <td
                      colSpan={5}
                      style={{
                        height: "0.25in",
                        fontSize: "62.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.subject_code || "Null"}
                    </td>
                    <td
                      colSpan={14}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.subject_title || "Null"}
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.lec_units}
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "62.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.lab_units}
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.credit_units}
                    </td>
                    <td
                      colSpan={2}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.tuition_units}
                    </td>
                    <td
                      colSpan={5}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.subject_section || "Null"}
                    </td>
                    <td
                      colSpan={8}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.subject_schedule_room || "Null"}
                    </td>
                    <td
                      colSpan={8}
                      style={{
                        height: "0.25in",
                        fontSize: "52.5%",
                        border: "1px solid black"
                      }}
                    >
                        {subject.subject_faculty}
                    </td>
                  </tr>
                );
              })}
        </>
    )
}

export default Subjects;