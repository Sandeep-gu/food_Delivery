import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Crousel from '../components/Crousel'

function Home() {
  const [foodCat,setFoodCat] = useState([]);
  const [FoodItem,setFoodItem] = useState([]);
  const [search,setSearch] = useState('');
  const loadData = async()=>{
    let response = await fetch('http://localhost:5000/api/foodData',{
      method:"POST",
      headers: {'Content-Type': 'application/json'}
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }
  useEffect(()=>{
    loadData();
  },[]);

  return (
    <div>
        <div><Navbar/></div>
        <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
                <div className="carousel-inner" style={{maxHeight:"500px"}}>
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <div className='d-flex justify-content-center'>
                            <input className='form-control me-2' type='search' placeholder="Search" aria-label="Search" value={search} onChange = {(e)=>{setSearch(e.target.value)}}/>
                           
                        </div>
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
        
        <div className="container">
          {
            foodCat !== []?foodCat.map((data)=>{
              return(
                <div className='row mb-3 ' key={data._id}>
                <div key={data._id} className='fs-3 m-3'>
                {data.CategoryName}

                </div>
                <hr/>
                {
                  FoodItem!==[]?FoodItem.filter((item)=>item.CategoryName===data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filterItems)=>{
                    return(
                      <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 ">
                        <Card itemName ={filterItems}  options = {filterItems.options[0]}></Card>
                      </div>
                    )
                  }):<div>No Such Data Found</div>
                }
              
              </div>
              )
            }):""
          }
            
        </div>
        <div><Footer/></div>
    </div>
  )
}

export default Home