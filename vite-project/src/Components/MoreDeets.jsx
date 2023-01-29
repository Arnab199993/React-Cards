import React from 'react'
import {Card} from "react-bootstrap"
const MoreDeets = () => {
    const cardinfo=[{
        image:"https://www.gannett-cdn.com/presto/2023/01/26/USAT/fb649dfe-2c9d-411b-ad4e-2c5551e8aff5-USATSI_19841721.jpg?width=660&height=441&fit=crop&format=pjpg&auto=webp",
        title:"Lebron James",
        text:"The Goat"
    },
    {
        image:"https://thesixersense.com/wp-content/uploads/getty-images/2017/07/1393725296.jpeg",
        title:"James Harden",
        text:"He good"
    },
    {
        image:"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/01/05/16729537160789.jpg",
        title:"Steph Curry",
        text:"He good too"
    },
    {
        image:"https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg",
        title:"Michael Jordan",
        text:"He is very close to good"
    }
    ]
    const rendercard=((card,index)=>{
        return <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img variant="top"  src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
    })
  return (
    <div className="grid">
        {
            cardinfo.map(rendercard)
        }
    </div>
  )
}

export default MoreDeets