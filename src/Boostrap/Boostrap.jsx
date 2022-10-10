import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function BasicExample({item}) {
    const {name,rating, imageURL,overview} = item
    console.log(name)
  return (
    <Card className='card'>
      <Card.Img variant="top" src={imageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {overview}
        </Card.Text>
        <Button variant="primary">{rating}</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;