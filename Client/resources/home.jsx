// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Home Page</title>

//     {/*Do not forget to change the path to the css file */}
//     <link href="./static/css/style.css" type="text/css" rel="stylesheet">
// </head>

<body>


    <div id="box">

        {/*In case of error, you should display div with className "error-container" */}
        {/*You can choose to display the first error or all of them (error message/s in your opinion) */}
        {/*}
        <div className="error-container">
            <p>Error</p>
        </div>*/}

        {/* Add navigation here*/}

        <main>

            <section id="home">
                <div className="home-container">

                    <div className="short-info">
                        <h1>The best of the wildlife photography.</h1>
                        <h2>Share knowledge about the environment and enrich your life.</h2>
                    </div>

                </div>
            </section>

            <section id="home-page">

                <div className="offers">
                    {/*Do not forget to change the path to the image*/}
                    <div className="col container"><img src="./static/img/nature1.jpg" alt="nature_1" /></div>
                    {/*Do not forget to change the path to the image */}
                    <div className="col container"><img src="./static/img/nature2.jpg" alt="nature_2" /></div>
                    {/*Do not forget to change the path to the image */}
                    <div className="col container"><img src="./static/img/nature3.jpg" alt="nature_3" /></div>
                    {/*Do not forget to change the path to the image */}
                    <div className="col container"><img src="./static/img/nature4.jpg" alt="nature_4" /></div>
                </div>

            </section>


        </main>


        <footer>
            © Js Back-End Exam 2021
        </footer>
    </div>

</body>

// </html>