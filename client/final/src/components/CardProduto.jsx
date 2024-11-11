import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduto = (props) => {
  return (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://alphagel.com.br/wp-content/uploads/2021/08/alphagel_alphagel_image_997.jpeg" />
    <Card.Body>
      <Card.Title>Nome Produto: {props.nome} </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Preço: {props.preco}</Card.Subtitle>
      <Card.Text>Descreção: {props.descricao}</Card.Text>
      <Card.Text>Categoria: {props.categoria}</Card.Text>

      <Card.Link href={`/produtos/edicao/${props.id}`}>
      <Button variant="warning">Editar</Button>
      </Card.Link>

      <Card.Link href={`/produtos/excluir/${props.id}`}>

      <Button variant="danger">Excluir</Button>
      </Card.Link>

    </Card.Body>
  </Card>
  )
}

export default CardProduto
