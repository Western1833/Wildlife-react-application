<main>

    <section id="create-page">
        <div className="createSection">
            <div className="info">
                <h2>Create your post, share information about wildlife.</h2>
            </div>

            <form action="#" method="" className="createForm">
                <h2>Create Post</h2>
                <ul className="noBullet">
                    <li>
                        <label for="title">Title:</label>
                        <input type="text" className="inputFields" id="title"
                            placeholder="Two golden snub-nosed monkeys" name="" value="" />
                    </li>
                    <li>
                        <label for="key-word">Keyword:</label>
                        <input type="text" className="inputFields" id="keyword" placeholder="Animal" name="" value="" />
                    </li>
                    <li>
                        <label for="location">Location:</label>
                        <input type="text" className="inputFields" id="location" placeholder="North America" name=""
                            value="" />
                    </li>
                    <li>
                        <label for="date">Date of creation:</label>
                        <input type="text" className="inputFields" id="date" placeholder="18.02.2021" name=""
                            value="" />
                    </li>
                    <li>
                        <label for="image">Wildlife image:</label>
                        <input type="text" className="inputFields" id="image" placeholder="http:/..." name=""
                            value="" />
                    </li>
                    <li>
                        <label for="description">Description:</label>
                        <textarea id="description" className="inputFields" name=""
                            placeholder="Monkey is..."></textarea>
                    </li>
                    <li id="center-btn">
                        <button id="create-btn">Create</button>
                    </li>
                </ul>
            </form>

        </div>
    </section>

</main>