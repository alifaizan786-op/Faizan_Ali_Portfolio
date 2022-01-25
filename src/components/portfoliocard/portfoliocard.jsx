import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function PortfolioCard (props) {
    return(
      <Card sx={{ justifyContent: 'center' }}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={props.repo} size="small">Repository</Button>
          <Button href={`'${props.deployed}'`} size="small">Deployed</Button>
        </CardActions>
      </Card>
    )
  }

  export default PortfolioCard