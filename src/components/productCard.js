import Socials from "./socials.js"
import Slide from "./slide.js";

function ProductCard({properties}) {
    return <>
        <div className="products__card">
            <figure className="products__slider">
                <Slide items={properties.Link}/>
            </figure>
            <div className="products__infos">
                <h3 className="title text products__title"> {properties.İsim} </h3>
                <span className="text products__price"><kbd>{properties.Fiyat} <span>₺</span></kbd></span>
                <Socials links={properties.SocialLinks}/>
            </div>
        </div>
    </>
}

export default ProductCard;