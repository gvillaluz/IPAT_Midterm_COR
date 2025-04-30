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
                  className="subject-header"
                >
                  SUBJECT TITLE
                </td>

                <td
                  colSpan={8}
                  className="subject-header"
                >
                  UNIT
                </td>

                <td
                  colSpan={5}
                  rowSpan={2}
                  className="subject-header"
                >
                  SECTION
                </td>
                <td
                  colSpan={8}
                  rowSpan={2}
                  className="subject-header"
                >
                  SCHEDULE/ROOM

                </td>
                <td
                  colSpan={8}
                  rowSpan={2}
                  className="subject-header"
                >
                  FACULTY
                </td>
              </tr>
              <tr>
                <td
                  colSpan={2}
                  className='subject-subHeader'
                >
                  Lec
                </td>

                <td
                  colSpan={2}
                  className='subject-subHeader'
                >
                  Lab
                </td>
                <td
                  colSpan={2}
                  className='subject-subHeader'
                >
                  Credit
                </td>
                <td
                  colSpan={2}
                  className='subject-subHeader'
                >
                  Tuition
                </td>
            </tr>
              {subjects.map((subject, index) => {
                return (
                  <tr key={index}>
                    <td
                      colSpan={5}
                      className='subjects names'
                    >
                        {subject.subject_code || "Null"}
                    </td>
                    <td
                      colSpan={14}
                      className='subjects names'
                    >
                        {subject.subject_title || "Null"}
                    </td>
                    <td
                      colSpan={2}
                      className='subjects units'
                    >
                        {subject.lec_units}
                    </td>
                    <td
                      colSpan={2}
                      className='subjects units'
                    >
                        {subject.lab_units}
                    </td>
                    <td
                      colSpan={2}
                      className='subjects units'
                    >
                        {subject.credit_units}
                    </td>
                    <td
                      colSpan={2}
                      className='subjects units'
                    >
                        {subject.tuition_units}
                    </td>
                    <td
                      colSpan={5}
                      className='subjects names'
                    >
                        {subject.subject_section || "Null"}
                    </td>
                    <td
                      colSpan={8}
                      className='subjects names'
                    >
                        {subject.subject_schedule_room || "Null"}
                    </td>
                    <td
                      colSpan={8}
                      className='subjects names'
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