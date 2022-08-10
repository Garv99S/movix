import reactdom from 'react-dom';
import "index.css"
import Card from "Cards.jsx"
import Data from "Data.jsx"


const Ncard = (fjf) => {
    return (
        <Card 
            imgsrc={fjf.imgsrc}
            title={fjf.title}
            sname={fjf.sname}
            link={fjf.link}
        />
    );
}

reactdom.render(
    <>
        <div className='head'><h1 className='heading'>List of Some Awesome Movies and Web-series... </h1></div>
        {Data.map(Ncard)}
    </>,document.getElementById('root')
)
