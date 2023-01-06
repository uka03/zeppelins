import "../style/BlogCard.css"
export default function BlogCard(prop){
    console.log(prop)
    return <div className="card">
         
            <img src={prop.img} alt=""  className="cardImg"/>
        
         <div className="cardContent">
            <h4 className="cardTitle">{prop.title}</h4>
            <p className="cardDesc">{prop.desc}</p>
            <a href="#">READ MORE</a>
         </div>
    </div>
}