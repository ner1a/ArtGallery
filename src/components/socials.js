function Socials({links}) {
    const socials = [];
    links.forEach(({title,imglink,link}, i) => {
       socials.push(
            <a href={link} key={i+1} target="_blank" className="socials__link td-none">
                <img src={imglink} alt={title} className="socials__img"/>
            </a>
        )
    });
    return (
        <div className="socials td-none">
            {socials}
        </div>
        );
}

export default Socials;