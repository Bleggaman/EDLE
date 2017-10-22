"use strict";

window.onload = function () {
    document.getElementById("btn-query").onclick = do_query;
}

// var data = ["foo", "bar", "baz"];

var data = [
    {"name": "jake", "city": "seattle", "job":"doctor"},
    {"name": "jim", "city": "washington dc", "job":"doctor"}
];

function do_query() {
    var query = document.getElementById("query").value;
    var matches = data.filter((x) => isMatch(query, x));
    var listElem = document.querySelector("ul");
    listElem.innerHTML = "";
    matches.forEach((entry) => {
        var curr = document.createElement("li");
        curr.innerText = entry["name"];
        curr.appendChild(entryToElement(entry));
        listElem.appendChild(curr);
    });
}

function entryToElement(entry) {
    debugger;
    var ans = document.createElement("ul");
    for (var key in entry) {
        if (key === "name") {
            continue;
        }
        var curr = document.createElement("li");
        curr.innerText = key + ": " + entry[key];
        ans.appendChild(curr);
    }
    return ans;
}

function isMatch(query, entry) {
    // query: search string
    // entry: data object
    var query_words = query.trim().split(" ");
    var ans = 0;
    return query_words.every((word) => {
        var values = Object.values(entry);
        // If some field of `entry` has `word` as a substring
        return values.some((v) => v.includes(word));
    });
}