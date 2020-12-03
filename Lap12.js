function main() {
    return "<div class=\"row\">\n" +
        "        <div class=\"container\">\n" +
        "            <div class=\"burger col-md-6\">\n" +
        "                <img src=\"images/hawaii_burger_1_2.jpg\" />\n" +
        "            </div>\n" +
        "            <div class=\"right-main col-md-6\">\n" +
        "                <h2>Hawaii Burger</h2>\n" +
        "                <p>60.000d</p>\n" +
        "                <div class=\"quanity\">\n" +
        "                    <div class=\"lbl\">Quanity</div>\n" +
        "                    <div class=\"inner\">\n" +
        "                        <button class=\"btn-minute\" type=\"button\">-</button>\n" +
        "                        <input type=\"number\" readonly=\"\" value=\"1\">\n" +
        "                        <button class=\"btn-plus\" type=\"button\">+</button>\n" +
        "                    </div>\n" +
        "                    <div>\n" +
        "                        <button class=\"btn btn-secondary btn-cart\" type=\"button\" title=\"Add to cart\">Add to cart</button>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>"
}
function getMenu() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if(this.readyState==4 && this.status == 200){
            var rs = this.responseText; // string ket qua tra ve
            rs = JSON.parse(rs);  // bien string thanh JSON
            var menu = rs.data;
            console.log(menu);
            document.getElementById("grid").innerHTML = grid(menu);
        }

    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/food/1");
    xhttp.send();
}
getMenu();