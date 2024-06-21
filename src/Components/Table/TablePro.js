import { Flex } from "antd"
import Row from "../Item/Row"

function TablePro({ headers, rows }) {

  const headerStyle ={
    backgroundColor: 'salmon',
    border: '1px solid black'
  }

  return (
    
    <div className="Table">
      <div className="TableHeader">
        { headers.map((header) =>{
            return <div style = { {width: header.scale}} key={header.name}>
              <div style={headerStyle}>
                {header.name}
              </div>
              {
                rows.map((row) => {
                  return <div className = "rowDiv" >
                    {row[header.name]}
                  </div>
                })
              }
              </div>
          })
        }
      </div>

      

    </div>
  )

}

export default TablePro;