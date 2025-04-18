
        <main>

            <section id="catalog">
                <h1>All posts</h1>
                <div className="band">

                    {/*If there are posts for wildlife in the database display each of them */}
                    <div className="flip flip-vertical">
                        <div className="front">
                            <img src="./static/img/pexels-photo-540518.png" alt="image_nature_1" />
                            <h1 className="text-shadow">Keyword: Mountain</h1>
                        </div>
                        <div className="back">
                            <h2>Title</h2>
                            <p>Description: A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock.</p>
                            <a href="#" className="details">Details</a>
                        </div>
                    </div>

                    <div className="flip flip-vertical">
                        <div className="front">
                            <img src="./static/img/big-waterfall-dario-428.jpg" alt="image_nature_2" />
                            <h1 className="text-shadow">Key word: Waterfall</h1>
                        </div>
                        <div className="back">
                            <h2>Title</h2>
                            <p>Description: A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops.</p>
                            <a href="#" className="details">Details</a>
                        </div>
                    </div>


                    {/*If there are still no posts for wildlife in the database display: */}
                    {/*<div className="no-posts">
                        <div className="no-posts-img">
                            <!/-- Do not forget to change the path to the image, and remove this comment  --/>
                            <img src="./static/img/animal.jpg" alt="image_nature_3" />
                        </div>
                        <p className="no-offer">There are no posts yet...</p>
                    </div>*/}
                </div>
            </section>
        </main>