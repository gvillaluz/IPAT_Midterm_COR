import './FeesAndRules.css'

const FeesAndRules = ({ fees, signature, approvedSignature }) => {
    return (
        <>
            <tr>
                <td
                  colSpan={22}
                  className='title_fees'
                >
                  ASSESSED FEES
                </td>
                <td
                  colSpan={8}
                  style={{
                    color: "white",
                    fontSize: "62.5%",
                    color: "black",
                    border: "1px 0px 1px 1px solid black",
                    textAlign: "center",
                  }}
                >
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Tuition (20 unit(s)) 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.tuition}
                </td>
                <td
                  colSpan={26}
                  className='title_rules rules'
                >
                  RULES OF REFUND
                </td>
              </tr>
              <tr>

              </tr>
              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Athletic Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.athletic_fee}
                </td>
                <td
                  colSpan={20}
                  className='rules normal_rules'
                >
                  1. Full refund of tuition fee - Before the start of classes
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Cultural Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.cultural_fee}
                </td>
                <td
                  colSpan={23}
                  className='rules normal_rules'
                >
                  2. 80% refund of tuition fee - within 1 week from the start of classes
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Developmental Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.development_fee}
                </td>
                <td
                  colSpan={20} 
                  className='rules normal_rules'
                >
                  3. 50% refund - within 2 weeks from the start of classes.
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Guidance Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.guidance_fee}
                </td>
                <td
                  colSpan={20}
                  className='rules normal_rules'
                >
                  4. No refund - after the 2nd week of classes.
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Library Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.library_fee}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Medical and Dental Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.medical_dental_fee}
                </td>
                <td
                  colSpan={26}
                  className='rules title_rules'
                >
                  PLEDGE UPON ADMISSION
                </td>
              </tr>
              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Registration Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                    {fees.registration_fee}
                </td>
                <td
                  colSpan={25}
                  className='promise'
                >
                  "As a student of EARIST, I do solemnly promise that I will
                </td>
              </tr>

              <tr>
                <td
                  colSpan={15}
                  className='label_fees'
                >
                  Computer Fee
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.computer_fee}
                </td>
                <td
                  colSpan={25}
                  className='promise promise_second'
                >
                    comply with the rules and regulations of the Institution."
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px"
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                    readOnly
                  />
                </td>
                <td
                  colSpan={13}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px"
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                    readOnly
                  />
                </td>
                <td
                  colSpan={7}
                  style={{
                    fontSize: "62.5%",
                    marginRight: "20px",
                    borderRight: "1px solid black",
                  }}
                >
                  <input
                    type="text"
                    value={""}
                    style={{
                      textAlign: "left",
                      color: "black",
                      width: "98%",
                      border: "none",
                      outline: "none",
                      background: "none"
                    }}
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px"
                  }}
                >
                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Total Assessment : 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.total_assessment}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px"
                  }}
                >
                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Less Financial Aid : 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.less_financial_aid}
                </td>
                <td 
                    colSpan={25}
                    className='image-container signature'
                >
                  <img
                    alt='signature'
                    src={signature}
                  />
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px"
                  }}
                >
                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Net Assessed : 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.net_assessed}
                </td>
                <td
                  colSpan={25}
                  className='rules title_rules'
                >
                  ____________________________________
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px"
                  }}
                >
                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Credit Memo : 
                </td>
                <td
                  colSpan={7}
                 className='fees'
                >
                  {fees.credit_memo}
                </td>
                <td
                  colSpan={25}
                  className='rules title_rules'
                >
                  Student's Signature
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px"
                  }}
                >
                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Total Discount : 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                  {fees.total_discount}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px"
                  }}
                >

                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Total Payment : 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                    {fees.total_payment}
                </td>
              </tr>

              <tr>
                <td
                  colSpan={2}
                  style={{
                    marginRight: "20px",
                  }}
                >
                </td>
                <td
                  colSpan={13}
                  className='label_fees total_fees'
                >
                  Outstanding Balance : 
                </td>
                <td
                  colSpan={7}
                  className='fees'
                >
                    {fees.outstanding_balance}
                </td>
                
              </tr>
              <tr>
                <td
                  colSpan={22}
                  className='title_fees'
                >
                  SCHEDULE OF PAYMENT
                </td>
                <td
                  colSpan={8}
                  className='approved'
                >
                  APPROVED BY : 
                </td>
                <td
                  colSpan={13}  
                >
                  <div
                    className='image-container'
                  >
                    <img
                      alt="Signature"
                      src={approvedSignature}
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td
                  colSpan={8}
                  className='payments'
                >
                  1st Payment/Due
                </td>
                <td
                  colSpan={7}
                  className='payments'
                >
                  2nd Payment/Due
                </td>
                <td
                  colSpan={7}
                  className='payments'
                >
                  3rd Payment/Due
                </td>
                <td
                  colSpan={25}
                  className='rules title_rules'
                >
                  ____________________________________
                </td>
              </tr>

              <tr>
                <td
                  colSpan={8}
                  className='payment_fees'
                >
                  {fees.first_payment_due}
                </td>
                <td
                  colSpan={7}
                  className='payment_fees'
                >
                  {fees.second_payment_due}
                </td>
                <td
                  colSpan={7}
                  className='payment_fees'
                >
                  {fees.third_payment_due}
                </td>
                <td
                  colSpan={25}
                  className='rules title_rules'
                >
                  Registrar
                </td>
              </tr>

              <tr>
                <td
                  colSpan={12}
                  className='promise payment_receipt'
                >
                  Payment/Validation Date : 
                </td>
                <td
                  colSpan={12}
                  className='promise'
                >
                  {`${fees.payment_validation_date}________`}
                </td>
              </tr>
              <tr>
                <td
                  colSpan={12}
                  className='promise payment_receipt'
                >
                  Official Receipt :
                </td>
                <td
                  colSpan={12}
                  className='promise'
                >
                  {`${fees.official_receipt}  _____`}
                </td>
              </tr>
        </>
    )
}

export default FeesAndRules;