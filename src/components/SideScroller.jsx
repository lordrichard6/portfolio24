const SideScroller = ({ images, speed = 5000 }) => {
    return (
        <div className="side-scroller relative w-full lg:w-1/2 h-[10rem] lg:h-[20rem] overflow-hidden">
            <div className="wrapper absolute flex">
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image, style }) => (
                        <div className={`image ${style}`} key={id}>
                            <img src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image, style }) => (
                        <div className={`image ${style}`} key={id}>
                            <img src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map(({ id, image, style }) => (
                        <div className={`image ${style}`} key={id}>
                            <img src={image} alt={id} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default SideScroller