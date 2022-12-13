
export const Carousel = ({title, video}) => {

    return (
        <div className="carousel-container">
            <h2>{title}</h2>
            <button className="arrow-left arrow-color">&#10094;</button>
            <button className="arrow-right arrow-color">&#10095;</button>
            <div className="carousel-size">
                <div className="carousel-flex">
                    {video}
                </div>
            </div>
        </div>
    )
}
