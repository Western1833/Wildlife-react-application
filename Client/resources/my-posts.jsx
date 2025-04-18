
<main>
    <section id="my-posts">
        <h1>My post.</h1>

        <div className="my-container">
            {/*If there are own posts for wildlife in the database display each of them */}
            <div className="my-card">
                <div className="card-header">
                    <img src="./static/img/big-waterfall-dario-428.jpg" alt="water_fall" />
                </div>
                <div className="card-body">
                    <span className="tag tag-teal">Keyword: Waterfall</span>
                    <h4>
                        Title: The magical waterfall
                    </h4>
                    <div className="user">
                        <img src="https://snworksceo.imgix.net/dtc/3f23c937-0065-4e17-8daa-46449777caed.sized-1000x1000.jpg?w=1000" alt="vote" />
                        <div className="user-info">
                            <h5>Author: Alex Petkov</h5>
                            <small>Rating of votes: -5</small>
                        </div>
                    </div>
                </div>
            </div>

            {/*If there are still no own posts for wildlife in the database display: */}
            {/*<div className="no-posts">
                        <div className="no-posts-img">
                            <!/-- Do not forget to change the path to the image, and remove this comment  --/>
                            <img src="./static/img/bear.jpg" alt="image_nature_3">
                        </div>
                        <p className="no-offer">There are no own posts yet...</p>
                    </div>*/}
        </div>
    </section>

</main>