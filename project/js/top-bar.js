function create_top_bar(data_value) {
    var template = `
        <div id="banner" class="banner">
            <style>
                body {
                    margin: 0;
                    font-family: Arial, Helvetica, sans-serif;
                }

                .banner {
                    overflow: hidden;
                    background-color: #0a0a0a;
                }

                .banner a {
                    float: left;
                    text-align: center;
                    color: #f0f0f0;
                    padding: 14px 16px;
                    text-decoration: none;
                    font-size: 17px;
                }

                .banner a:hover {
                    background-color: #f0f0f0;
                    color: #0a0a0a;
                    cursor: pointer;
                }

                .banner a.active {
                    background-color: rgb(40, 160, 255);
                    color: #f0f0f0;
                }

                .banner-right {
                    float: right;
                }
            </style>
            <a id="home" href="../information/main.html">HOME</a>
            <a id="games" href="../information/game-list.html">GAMES</a>
            <div id="banner-right" class="banner-right">
                <a id="upcoming" href="../information/upcoming.html">UPCOMING</a>
                <a id="about" href="../information/about.html">ABOUT</a>
            </div>
        </div>
    `;

    data_values = data_value.split(", ");

    highlight_page = data_values[0];
    page_name = data_values[1];

    document.getElementById("title-bar").innerHTML = template;
    document.getElementById(highlight_page).classList.add("active");
    document.title = page_name;
}