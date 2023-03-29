import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function ProductList() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const productList = JSON.parse(localStorage.getItem('products')) || [];

    console.log(localStorage.getItem('products'));

    setProducts(productList);
  }, []);

  const removeFromCart = (product) => () => {
    const currentAddedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const newProducts = currentAddedProducts.filter(p => p.id !== product.id);

    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  }

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} >
          {
            products.length > 0 ?
              <Grid container spacing={4}>
                {products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={product.image}
                        title={product.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.title}
                        </Typography>
                        <Typography>
                          {product.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" onClick={removeFromCart(product)}>
                          Remove from Cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              :
              <h3>Cart is Empty </h3>
          }
        </Container>
      </main>
    </React.Fragment>
  );
}
