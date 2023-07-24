var bookmarkNameInput = document.getElementById("siteName");
var bookmarkUrlInput = document.getElementById("siteUrl");
var allBookmarks = [];
var bookmarksNames = []

if (localStorage.getItem("bookmarks") != null){
    allBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    displayData();
}

function addSite(){
    var bookmark = {
        index: allBookmarks.length,
        name: bookmarkNameInput.value,
        url: bookmarkUrlInput.value
    }
    if ( bookmarksNames.includes(bookmark.name) == false){
        bookmarksNames.push(bookmark.name)
        allBookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
    }
    console.log(allBookmarks);
    displayData();
    clearData();
}

function displayData(){
    cartona = ``;
    for (var i = 0; i < allBookmarks.length; i++){
        cartona += `
            <tr class= "text-center">
                <td>${allBookmarks[i].index}</td>
                <td>${allBookmarks[i].name}</td>
                <td><a href = "${allBookmarks[i].url}"  target = "_blank" class="btn btn-success">
                <i class="fa-solid fa-eye px-1"></i>Visit</a></td>
                <td><button class="btn btn-danger" onclick="deleteBookmark(${i})">
                <i class="fa-solid fa-trash-can px-1"></i>Delete</button></td>
            </tr>
        `;
    }
    document.getElementById("tabelBody").innerHTML = cartona;
}

function clearData(){
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
}

function deleteBookmark(index){
    allBookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(allBookmarks));
    bookmarksNames.splice(index, 1);
    displayData();
}
