import './Row.css';

// [{
//   size,
//   value,
//   eventHandler,
// }]


function Row({col, event}){

  const click = ()=> event

  return <div className="row">

      {
        Object.values(col).map((att) => {
            return <div key= {att} className={att}>{att}</div>
          })
      } 

    </div>
}

export default Row;