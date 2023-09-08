import React, { useEffect, useState,useRef } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
export default function(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let setOptions = Object.keys(options)
    const [qty,setQty] = useState(1)
    const [size,setSize] = useState('')
    const handleOnCart = async()=>{
        let food=[]
        for(const item of data){
            if (item.id===props.itemName._id){
                food=item;
                break;
            }
        }
        if(food!=[]){
            if(food.size === size){
                await dispatch({type:"UPDATE",id:props.itemName._id,price:finalPrice,qty:qty})
                return
            }
            else if(food.size !==size){
                dispatch({type:"ADD",id:props.itemName._id,name:props.itemName.name,img:props.itemName.img,price:finalPrice,qty:qty,size:size})
                return
            }
            return
        }
        dispatch({type:"ADD",id:props.itemName._id,name:props.itemName.name,img:props.itemName.img,price:finalPrice,qty:qty,size:size})
        console.log(data)
        
    }
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    let finalPrice = qty * parseInt(options[size])
  return (
    <div>
        <div className="card mt-3" style={{"maxHeight":"400px"}}>
            <div style={{height:'150px'}}><img src={props.itemName.img} className="card-img-top object-fit-cover" style={{width:'100%', height:'100%'}} alt="..."/></div>
            <div className="card-body">
                <h5 className="card-title">{props.itemName.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-success rounded' onClick = {(e)=>setQty(e.target.value)}>
                        {Array.from(Array(6),(e,i)=>{
                            return (<option key={i+1} value={i+1}>{i+1}</option>)
                        })}
                    </select>
                    <select className="m-2 h-100 bg-success rounded" ref={priceRef} onClick={(e)=>setSize(e.target.value)}>
                        {
                            setOptions.map((option)=>{
                                return (<option key={option} value={option}>{option}</option>)
                            })
                        }
                        
                        
                    </select>
                    <div className="d-inline fs-5">{finalPrice}/-</div>
                    <div className="btn btn-primary" onClick = {handleOnCart}>Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
  )
}
