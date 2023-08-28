import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/categ.css";

const Categories = () => {
  return (
    <div className='categ-container'>
        <Link to="/">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg'/>
          <p className='categ-name'>Amazing Pools</p>
        </Link>

        <Link to="/farms">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <p className='categ-name'>Farms</p>
        </Link>

        <Link to="/views">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'/>
          <p className='categ-name'>Amazing Views</p>
        </Link>

        <Link to="/categroom">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg'/>
          <p className='categ-name'>Rooms</p>
        </Link>

        <Link to="/lakefront">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg'/>
          <p className='categ-name'>Lakefront</p>
        </Link>

        <Link to="/omg">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg'/>
          <p className='categ-name'>OMG!</p>
        </Link>

        <Link to="/beachfront">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <p className='categ-name'>Beachfront</p>
        </Link>

        <Link to="/cabins">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg'/>
          <p className='categ-name'>Cabins</p>
        </Link>

        <Link to="/tinyhomes">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg'/>
          <p className='categ-name'>Tiny Homes</p>
        </Link>

        <Link to="/luxe">
          <img className='categ-logo' src='https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg'/>
          <p className='categ-name'>Luxe</p>
        </Link>
    </div>
  )
}

export default Categories;