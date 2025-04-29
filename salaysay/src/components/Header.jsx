import EaristLogo from "../assets/EaristLogo.png";

const Header = ({ studentProfile }) => {
    return (
        <td colSpan={48} style={{ height: "0.5in", textAlign: "center" }}>
                  <table width="100%" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                      <tr>
                       
                        <td style={{ width: "20%", textAlign: "center" }}>
                          <img src={EaristLogo} alt="Earist Logo" style={{marginLeft: "25px", width: "150px", height: "110px" }} />
                        </td>

                        <td style={{ width: "60%", textAlign: "center", lineHeight: "1" }}>
                          <div>Republic of the Philippines</div>
                          <b>Eulogio "Amang" Rodriguez</b><br />
                          <b>Institute of Science and Technology</b><br />
                          Nagtahan St. Sampaloc, Manila<br />
                          <br />
                          <br />
                          <b style={{ fontSize: "16px", }}>CERTIFICATE OF REGISTRATION</b>
                        </td>

                        <td
                          colSpan={4}
                          rowSpan={6}
                          style={{
                            textAlign: "center",
                            position: "relative",
                            width: "3.5cm",
                            height: "4.5cm",
                          }}
                        >
                          <div
                            style={{
                              width: "3.8cm",
                              height: "3.8cm",
                              marginRight: "30px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              position: "relative",
                            }}
                          >
                              <img
                                src={studentProfile}
                                alt="Uploaded"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
    )
}

export default Header;