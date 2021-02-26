import {useState, useEffect} from 'react'
import {DropdownButton} from 'react-bootstrap';

function SlideDownMenu({productList, onChangeS, onChangeR, onChangeC, onChangePmin, onChangePmax }) {
    const [show, setShow] = useState(true)
    useEffect(() => {

        if (show) {
            document.getElementById("slide-down-img").classList.add("flip")
            document.getElementById("slide-down-content").classList.remove("slide-up-effect")
            document.getElementById("slide-down-content").classList.add("slide-down-effect")
        } else {
            document.getElementById("slide-down-img").classList.remove("flip")
            document.getElementById("slide-down-content").classList.remove("slide-down-effect")
            document.getElementById("slide-down-content").classList.add("slide-up-effect")
        }
    })
    const cesit = []
    const cesitList = []
    const renk = []
    const renkList = []
    productList.forEach((p, i) => {
        if (i == 0) {
            p.Renk.split(",").forEach((r) => {
                renk.push(r)
            });   
        } else {
            p.Renk.split(",").forEach(r => {
                if (!renk.includes(r)) {
                    renk.push(r)
                }
            });
        }
    });
    productList.forEach((p, i) => {
        if (i == 0) {
            p.Çeşit.split(",").forEach((c) => {
                cesit.push(c)
            });   
        } else {
            p.Çeşit.split(",").forEach(c => {
                if (!cesit.includes(c)) {
                    cesit.push(c)
                }
            });
        }
    });
    cesit.sort()
    renk.sort()
    cesit.forEach((c, i) => {
        const id = `${c}`
        const idLbl = `${c}-lbl`
        cesitList.push(
            <div key={i}>
                <label htmlFor={id} id={idLbl} className="text slide-down__checkbox-title">{c}
                    <input id={id} onChange={(e) => onChangeC(c,e.target.checked)} className="slide-down__checkbox" type="checkbox"/>               
                    <span className="slide-down__checkmark"></span>
                </label>
            </div>
        )
    });
    renk.forEach((r, i) => {
        const id = `${r}`
        const idLbl = `${r}-lbl`
        renkList.push(
            <div key={i}>
                <label htmlFor={id} id={idLbl} className="text slide-down__checkbox-title">{r}
                    <input id={id} data={r} onChange={(e) => onChangeR(r,e.target.checked)} className="slide-down__checkbox" type="checkbox"/>
                    <span className="slide-down__checkmark"></span>
                </label>
            </div>
        )
    });

    return <>
        <div className="slide-down container">
            <div className="slide-down__content-bar" id="slide-down-content">
                <div className="slide-down__content">
                    <div className="slide-down__filter">
                        <DropdownButton className="text slide-down__button-filter" id="dropdown-button-drop-down" drop="down" title="Ürün Malzemesi">
                            {cesitList}
                        </DropdownButton>
                        <DropdownButton className="text slide-down__button-filter" id="dropdown-button-drop-down" drop="down" title="Renk">
                            {renkList}
                        </DropdownButton>                        
                        <DropdownButton className="text slide-down__button-filter" id="dropdown-button-drop-down" drop="down" title="Fiyat Aralığı">
                            <input placeholder="Min" onChange={(e) => onChangePmin(e.target.value)} className="slide-down__search-input slide-down__price-input" type="number" min="0" step="1"/>
                            <span className="text"> - </span>
                            <input placeholder="Max" onChange={(e) => onChangePmax(e.target.value)} className="slide-down__search-input slide-down__price-input" type="number" min="0" step="1"/>
                        </DropdownButton>
                    </div>
                    <div className="slide-down__search">
                        <input type="text" onChange={(e) => onChangeS(e.target.value)} id="search-input" placeholder="Arama" className="slide-down__search-input" />
                    </div>
                </div>
                <button onClick={() => (show==true) ? setShow(false):setShow(true)} className="slide-down__button button td-none">
                    <img src="https://svgshare.com/i/UNB.svg" id="slide-down-img" alt="down-arrow" className="slide-down__img" height="15" />
                </button>
            </div>
        </div>
    </>
}

export default SlideDownMenu;