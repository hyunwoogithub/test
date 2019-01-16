
    function addplus(items) {
                        var plussed = "";
                        for (var t = 1; t <= items.length; t++) {
                            if (items.substring(t - 1, t) == " ") {plussed += "+"; }
                            else {plussed += items.substring(t - 1, t); }
}
return plussed;
}

// Do the Search
                    function doSearch() {
                        var words;
    words = document.searchforit.query.value;
    var searchitems;
    searchitems = addplus(words);
    var index;
    // obtain the selectedIndex properties from the search engines option for
    index = document.searchforit.service.selectedIndex;
                        if (index >= 0) {
                            var site;
    site = document.searchforit.service.options[index].value;
    site += searchitems;


                            if (notEmpty(searchitems)) {
        //window.open("","mainWin"); 
        window.open(site, "_blank");
    //window.location=site; 
    }
}

                        else {alert("검색 엔진을 선택하세요."); }
}

// Check for empty contents in search searchitems
                    function notEmpty(word) {
                        if (word == "" || word == null) {
        self.status = "ENTER SEARCH searchitems";
    alert("검색어를 입력하세요.");
    document.searchforit.query.focus();
    return false;
}
                        else {
        self.status = word + "을(를) 찾고 있습니다.";
    return true;
}
}

                    function clearIt() {
        document.searchforit.query.value = "";
    document.searchforit.query.focus();
}

                    function FocusOn() {
        document.searchforit.query.focus();
    return;
}

