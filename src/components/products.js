import {productList} from "../productList"
import ProductCard from "./productCard"
import SlideDownMenu from "./slideDownMenu"
import Slide from "./slide.js";
import { Container, Row, Col } from 'react-bootstrap';
import React ,{ useEffect , useState } from "react"
import ReactDOM from 'react-dom'

function Products() {
    useEffect(() => {
        if (prizedList.length<=0) {
            document.getElementById("search-error").classList.remove("d-none")
        }
        else{
            document.getElementById("search-error").classList.add("d-none")
        }
        document.querySelectorAll(".products__slider").forEach(e => {
            e.addEventListener("click", showDetails)
        });
        document.querySelectorAll(".products__title").forEach(e => {
            e.addEventListener("click", showDetails)
        });
        function showDetails(e) {   
            //-----------------------------------------------------------------------------            
            let showDetailsContainer = document.createElement("div")
            showDetailsContainer.classList.add("products__details-container")
            showDetailsContainer.id= "showDetailsContainer"
            document.getElementById("root").appendChild(showDetailsContainer)
            //-----------------------------------------------------------------------------            
            let detailsCloser = document.createElement("div")
            detailsCloser.className = "products__details-container products__details-closer"
            document.getElementById("showDetailsContainer").appendChild(detailsCloser)
            //-----------------------------------------------------------------------------
            let showDetails = document.createElement("div")
            showDetails.classList.add("products__details")
            showDetails.id = "showDetails"
            document.getElementById("showDetailsContainer").appendChild(showDetails)
            //-----------------------------------------------------------------------------
            let detailsCloseButton = document.createElement("img")
            detailsCloseButton.alt = "close"
            detailsCloseButton.src = "https://svgshare.com/i/UXZ.svg"
            detailsCloseButton.className = "products__details-close-button"
            document.getElementById("showDetails").appendChild(detailsCloseButton)
            //-----------------------------------------------------------------------------            
            //Details penceresini yok ettik
            detailsCloser.addEventListener("click", () => {
                showDetailsContainer.remove()
            })
            detailsCloseButton.addEventListener("click", () => {
                showDetailsContainer.remove()
            })
            //-----------------------------------------------------------------------------
            let showDetailsImg = document.createElement("div")
            showDetailsImg.classList.add("products__details-img")
            showDetailsImg.id = "showDetailsImg"
            document.getElementById("showDetails").appendChild(showDetailsImg)
            //-----------------------------------------------------------------------------
            let pCard = e.target.parentElement
            while (true) {
                if (pCard.className == "products__card") {
                    break
                } 
                else {
                    pCard = pCard.parentElement    
                }
            }
            //-----------------------------------------------------------------------------
            let imgLink = []
            let titleInfo = ""
            let tagsList = []
            let descInfo = ""
            let priceInfo = ""
            let socialList = []
            productList.forEach(e => {
                if (e.İsim==pCard.children[1].children[0].innerText) {
                    imgLink = e.Link
                    titleInfo = e.İsim
                    tagsList = e.Etiket.split(",")
                    descInfo = e.Açıklama
                    priceInfo = e.Fiyat
                    socialList = e.SocialLinks
                }
            });
            ReactDOM.render(<Slide items={imgLink}/>,document.getElementById("showDetailsImg"))
            //-----------------------------------------------------------------------------
            let infos = document.createElement("div")
            infos.className = "products__details-infos"
            infos.id = "showDetails-infos"
            document.getElementById("showDetails").appendChild(infos)
            //-----------------------------------------------------------------------------
            let title = document.createElement("h2")
            title.className = "products__details-title text title"
            title.id = "showDetails-title"
            title.innerText = titleInfo
            document.getElementById("showDetails-infos").appendChild(title)
            //-----------------------------------------------------------------------------
            let tags = document.createElement("div")
            tags.className = "products__details-tags"
            tags.id = "showDetails-tags"
            document.getElementById("showDetails-infos").appendChild(tags)
            tagsList.forEach(t => {
                let tag = document.createElement("span")
                tag.className = "products__details-tag text"
                tag.innerText = t
                document.getElementById("showDetails-tags").appendChild(tag)
            });
            //-----------------------------------------------------------------------------
            let price = document.createElement("span")
            price.className = "text products__price products__details-price"
            price.id = "showDetails-price"
            price.innerText = priceInfo
            let tl = document.createElement("span")
            tl.innerText = " ₺"
            document.getElementById("showDetails-infos").appendChild(price)
            document.getElementById("showDetails-price").appendChild(tl)

            //-----------------------------------------------------------------------------
            let desc = document.createElement("p")
            desc.className = "products__details-desc text"
            desc.innerText = descInfo
            document.getElementById("showDetails-infos").appendChild(desc)
            //-----------------------------------------------------------------------------
            let socials = document.createElement("div")
            socials.className = "products__details-socials"
            socials.id = "showDetails-socials"
            document.getElementById("showDetails-infos").appendChild(socials)
            socialList.forEach((s,i) => {
                let social = document.createElement("a")
                social.className = "socials__link products__details-social-link td-none"
                social.href = s.link
                social.id = `showDetails-social-${i}`
                social.target = "_blank"
                let socialImg = document.createElement("img")
                socialImg.className = "socials__img"
                socialImg.src = s.imglink
                socialImg.alt = s.title
                document.getElementById("showDetails-socials").appendChild(social)
                document.getElementById(`showDetails-social-${i}`).appendChild(socialImg)
            });
        }

    })
//-----------------------------------------------------------------------------
    const [searchWord , setSearchWord] = useState("");
    const [cesit, setCesit] = useState("");
    const [styleFilterList] =  useState([]);
    const [renk, setRenk] = useState("");
    const [colorFilterList] =  useState([]);
    const [addColour ,setAddColour] = useState();
    const [addStyle ,setAddStyle] = useState();
    const [minPrize, setMinPrize] = useState(0);
    const [maxPrize, setMaxPrize] = useState(0);
    if (maxPrize=="") {
        setMaxPrize(999999999)
    }
//-----------------------------------------------------------------------------
    function handleChangeSearch(string) {
        setSearchWord(string.toLocaleLowerCase())
    }
    function handleChangeStyle(string,bool) {
        setCesit(string.toLocaleLowerCase())
        setAddStyle(bool)
    }
    function handleChangeColour(string,bool) {
        setRenk(string.toLocaleLowerCase())
        setAddColour(bool)
    }
    handleColorFilterList(colorFilterList,renk,addColour)
    function handleColorFilterList(list,item,add) {
        if (add) {
            if (!list.includes(item)) {
                list.push(item) 
            }
        } else {
            list.forEach((e,i) => {
                if (e==item) {
                    list.splice(i,1)
                }
            });
        }
    }
    handleStyleFilterList(styleFilterList,cesit,addStyle)
    function handleStyleFilterList(list,item,add) {
        if (add) {
            if (!list.includes(item)) {
                list.push(item) 
            }
        } else {
            list.forEach((e,i) => {
                if (e==item) {
                    list.splice(i,1)
                }
            });
        }
    }
    function handleChangeMinPrize(Int) {
        setMinPrize(Int)
    }
    function handleChangeMaxPrize(Int) {
        setMaxPrize(Int)
    }
//-----------------------------------------------------------------------------
    let filteredList = productList.filter(e => 
        e.İsim.toLocaleLowerCase().indexOf(searchWord) > -1
        || e.Etiket.toLocaleLowerCase().indexOf(searchWord) > -1
    )
    let styledList = filteredList.filter(e => {
        let control = 0
        if (styleFilterList.length>0) {
            for (let i = 0; i < styleFilterList.length; i++) {
                if (e.Çeşit.toLocaleLowerCase().indexOf(styleFilterList[i].toLocaleLowerCase()) > -1) {
                    control += 1
                }
            }
            if(control == styleFilterList.length){
                return true
            }
            else{
                return false
            }
        } 
        else {
            return true
        }
    })
    let coloredList = styledList.filter(e => {
        let control = 0
        if (colorFilterList.length>0) {
            for (let i = 0; i < colorFilterList.length; i++) {
                if (e.Renk.toLocaleLowerCase().indexOf(colorFilterList[i].toLocaleLowerCase()) > -1) {
                    return true
                }
            }
        } 
        else {
            return true
        }
    })
    let prizedList = coloredList.filter(e => 
        maxPrize >= e.Fiyat &&  minPrize <= e.Fiyat
    )
//-----------------------------------------------------------------------------
    const productCards = [];
    if (prizedList.length>0) {
        prizedList.forEach((e , i) => {
            productCards.push(
                <Col key={i}>
                    <ProductCard properties={e}/>
                </Col>
            )
        });
    } 
//-----------------------------------------------------------------------------
    return<>
        <main className="main _products" id="main">
            <SlideDownMenu productList={productList} onChangeS={handleChangeSearch} onChangeR={handleChangeColour} onChangeC={handleChangeStyle} onChangePmin={handleChangeMinPrize} onChangePmax={handleChangeMaxPrize}/>
            <div className="products">
                <h1 key="1" id="search-error" className="products__no-result text d-none">Aradığınız şartlara uygun ürün bulunamadı.<span className="products__no-result-span"><small>Lütfen farklı arama ya da filtre kriterleri deneyiniz.</small></span></h1>
                <Container>
                    <Row xs={1} sm={2} md={3} lg={4} className="main__row">
                        {productCards}
                    </Row>
                </Container>
            </div>
        </main>
    </>
}

export default Products