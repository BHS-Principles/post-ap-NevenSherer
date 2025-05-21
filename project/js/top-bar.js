function create_top_bar(page_name) {
    var template = `
        <div id="banner" class="banner">
            <a id="home" href="../information/main.html">HOME</a>
            <a id="game-list" href="../information/game-list.html">GAMES</a>
            <div id="banner-right" class="banner-right">
                <a id="upcoming" href="../information/upcoming.html">UPCOMING</a>
                <a id="about" href="../information/about.html">ABOUT</a>
            </div>
        </div>
    `;

    document.getElementById("title-bar").innerHTML = template;
    document.getElementById(page_name).classList.add("active");
}