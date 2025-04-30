import './Student.css'

const Student = ({ student }) => {
    return (
        <>
            <tr>
                <td
                  colSpan={48}
                  className='student-header'
                >
                  STUDENT GENERAL INFORMATION
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  className="student-info student-labels start"
                >
                  Student No:
                </td>
                <td
                  colSpan={14}
                  className="student-info"
                >
                  {student.student_no}
                </td>
                <td
                  colSpan={6}
                  className="student-info student-labels"
                >
                  College:
                </td>
                <td
                  colSpan={14}
                  className="student-info"
                >
                  {student.college}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  className="student-info student-labels"
                >
                  Name:
                </td>
                <td
                  colSpan={14}
                  className="student-info"
                >
                  {student.student_name}
                </td>
                <td
                  colSpan={6}
                  className="student-info student-labels"
                >
                  Program:
                </td>
                <td
                  colSpan={16}
                  className="student-info"
                >
                  {student.program}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  className="student-info student-labels"
                >
                  Gender :
                </td>
                <td
                  colSpan={14}
                  className="student-info"
                >
                  {student.gender}
                </td>
                <td
                  colSpan={13}
                  className="student-info student-labels"
                >
                  Major:
                </td>

                <td
                  colSpan={8}
                  className="student-info student-labels"
                >
                  Curriculum:
                </td>
                <td
                  colSpan={4}
                  className="student-info"
                >
                  {student.curriculum}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  className="student-info student-labels"
                >
                  Age :
                </td>
                <td
                  colSpan={14}
                  className="student-info"
                >
                  {student.age}
                </td>
                <td
                  colSpan={5}
                  className="student-info student-labels"
                >
                  Year Level:
                </td>
                <td
                  colSpan={8}
                  className="student-info"
                >
                  {student.year_level}
                </td>
                <td
                  colSpan={13}
                  className="student-info student-labels"
                >
                  {`Scholarship/Discount : ${student.scholarship_discount}`}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={7}
                  className="student-info student-labels end"
                >
                  Email Address:
                </td>
                <td
                  colSpan={20}
                  className="student-info"
                >
                  {student.email_address}
                </td>
              </tr>
        </>
    )
}

export default Student;