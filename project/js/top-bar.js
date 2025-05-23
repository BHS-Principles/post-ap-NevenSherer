function create_top_bar(page_name) {
    var template = `
        <div id="banner" class="banner">
            <a id="home" href="../information/main.html">HOME</a>
            <a id="games" href="../information/game-list.html">GAMES</a>
            <div id="banner-right" class="banner-right">
                <a id="upcoming" href="../information/upcoming.html">UPCOMING</a>
                <a id="about" href="../information/about.html">ABOUT</a>
            </div>
        </div>
    `;

    document.getElementById("title-bar").innerHTML = template;
    document.getElementById(page_name).classList.add("active");
    console.log(page_name.charAt(0).toUpperCase());
    page_name_temp = page_name.slice(1, page_name.length);
    page_name = page_name.charAt(0).toUpperCase();
    page_name = page_name + page_name_temp;
    document.title = page_name;
}