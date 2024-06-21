
import Row from "./Row"

function Table({ headers =["name", "ofice", "clado"], rows =[12,2] }) {

  const style ={
    backgroundColor: 'salmon',
    border: '1px solid black'
  }

  return (
    
    <div className="Table">
      <div className="TableHeader">
        { headers.map((header) =>{
            return <div style = { {...style, width: '100px', height: '50px'}} key={header.name}>{header}</div>

          })
        }
      </div>

      {
        rows.map((row) => {
          return <Row key={row.id} rows={row}/>
        })
      }

    </div>
  )

}

export default Table;