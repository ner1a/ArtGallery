function Description({descs}) {
    return(
        <div className="main__desc text">
            <h3 className="title text">{descs.title}</h3>
            <p className="main__text text">{descs.desc}</p>
        </div>
    );
}

export default Description;