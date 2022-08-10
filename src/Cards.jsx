import './index.css';

function Card(props){
    return(
    <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="dark" className="card_img" />
                <div className="card_info">
                    <span className="card_category">{props.title} <br/></span>
                    <h3 className="card_title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch now</button>
                    </a>
                </div>
            </div>
        </div>);
}

export default Card;
