
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({title,price,img,id}) => {
  return (
    
    <><Link to= {`/ItemDetail/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200, width:200}}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card></Link>
       
   
      {/* <Link to= {`/ItemDetail/${id}`}> <div className="item-container"  style={{border: "2px solid steelblue"}}>
      <h2>{title}</h2>
      <img src={img}/>
      <h3>{price}</h3></div></Link> */}

    
   </> 
  )
  };

export default ProductCard
