let $searchTerm = $("#search-term");
const $gif = $("#div");

$("form").on("submit", async function(e) {
    e.preventDefault();
    let searchTerm = $searchTerm.val(); 
    let res = await axios.get("http://api.giphy.com/v1/gifs/search", {params: {q: searchTerm, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    addGif(res.data);
    $searchTerm.val("");
})

function addGif (res) {
    let length = res.data.length;
    let index = Math.floor(Math.random() * length)
    let $newDiv = $("<div>");
    let $newImg = $("<img>", {src: res.data[index].images.original.url});
    $newDiv.append($newImg);
    $gif.append($newDiv);
}

$("#remove").on("click", function(e) {
    $gif.empty();
});