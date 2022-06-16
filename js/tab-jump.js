chrome.tabs.query({currentWindow: true}, function(tabs) {
    var tabsDiv = document.getElementById("tabs");
    tabs.forEach(function(tab) {
        tabsDiv.appendChild(createTabJumpButton(tab));
    })
});

function createTabJumpButton(tab) {
    var element = document.createElement("input");
    element.type = "button";
    element.value = tab.title;
    element.className = "tab-jump-button"
    element.onclick = function() {
    console.log(tab);
        chrome.tabs.update(tab.id, {active: true});
    };
    return element;
}
