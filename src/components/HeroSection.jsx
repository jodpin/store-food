import CustomImage from "./CustomImage";

export default function HeroSection(){

    const images =[
        "img/gallery/img_1.jpg",
        "img/gallery/img_2.jpg",
        "img/gallery/img_3.jpg",
        "img/gallery/img_4.jpg",
        "img/gallery/img_5.jpg",
        "img/gallery/img_6.jpg",
        "img/gallery/img_7.jpg",
        "img/gallery/img_8.jpg",
        "img/gallery/img_9.jpg",

    ]
    

    return(
        <div className="section">
            <div className="col typography">
                <h2 className="title">What Are We About</h2>
                <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cumque eius nulla tempore magnam doloremque necessitatibus suscipit ullam maxime dolorem aspernatur dicta inventore similique rem illo facilis, a autem temporibus.</p>
                <button className="btn">EXPLORE NOW</button>
            </div>
            <div className="col gallery">
                {images.map(imgSrc=>(
                    <CustomImage key={imgSrc} imgSrc={imgSrc}/>
                ))}

            </div>
        </div>
    )
}