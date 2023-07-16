import '../style/superhero.css';



function Superhero(props) {
    return (
    <div className="card-superhero">
        <h2 className="superhero-name">{props.name}</h2>
        <p className="superhero-universe">Вселенная: {props.universe}</p>
        <p className="superhero-alterego">Альтер эго: {props.alterego}</p>
        <p className="superhero-occupation">Род деятельности: {props.occupation}</p>
        <p className="superhero-friends">Друзья: {props.friends}</p>
        <p className="superhero-superpowers image-superhero">Суперсилы: {props.superpowers}</p>
        <img className="superhero-url" src ={props.url}/>
        <p className="superhero-info">{props.info}</p>
    </div>
    );
}


export default Superhero;