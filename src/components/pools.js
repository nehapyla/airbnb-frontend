import React, { useEffect, useState } from 'react'
import "../styles/pools.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/slices/roomsSlice';
import { Link } from 'react-router-dom';
import { selectHotels } from '../redux/slices/selectedHotel';

const Pools = () => {
  const dispatch = useDispatch();
  const pools = useSelector((state) => state.Room.value)
  useEffect(() => {
    dispatch(fetchData(1))
  }, [])
  console.log(pools);

  const [selectedHotel, setSelectedHotel] = useState("")
  useEffect(() => {
    dispatch(selectHotels(selectedHotel))
  }, [selectedHotel])
  const selected = useSelector((state) => state.selRoom.value)

  return (
    <div className='card'>
      {pools.map((e) => {
        return (
          <div >
            <Link to={selected ? `/nextpage/${e._id}` : '/'}>
              <div>
                <img className='pool-img' onClick={() => setSelectedHotel(e)} src={e.picture_url} />
              </div>
            </Link>
            <div>
              <h5>{e.host_location}</h5>
              <p>{e.name}</p>
              <p>{e.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Pools;