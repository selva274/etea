import "../App.css"
const TeaPage = ({tea}) => {
  return (
    <div className='container'>
      <h2 style={{textAlign:'center',fontFamily:"serif",margin:"20px"}}>Available Tea : <span style={{textDecoration:"underline"}}>{tea.length}</span> items</h2>
      <div className='row'>
        {tea.map((item) => {
          return (
            <div className='col cards'>
              <div className="card mycard">
                <img src={item.image} className="card-img-top" alt="name" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
               <button type='button' className='btn btn-primary'>Buy</button>
                </div>
              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}

export default TeaPage