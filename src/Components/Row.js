import './Row.css';


function Row({index, name , price = 0, number}){
  return  <div className="row">
    <div className='index'>{index}</div>
    <div className='name'>{name}</div>
    <div className='price'>$ {price}</div>
    <div className='number'>{number}</div>
     
  </div>
}

export default Row;