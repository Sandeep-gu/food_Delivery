import React from 'react'

function Crousel() {
  return (
    <div>
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" style={{maxHeight:"500px"}}>
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <form className='d-flex'>
                            <input className='form-control me-2' type='search' placeholder="Search" aria-label="Search"/>
                            <button className='btn btn-outline-success text-white' type='submit'>Search</button>

                        </form>
                    </div>
                    <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..."/>
                    </div>
                    <div className="carousel-item" >
                    <img src="https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..."/>
                    </div>
                    <div className="carousel-item" >
                    <img src="https://images.unsplash.com/photo-1584178639036-613ba57e5e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100" style={{filter:"brightness(30%"}} alt="..."/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default Crousel