const searchDiv = document.querySelector(".GitHubApi__history")


document
    .querySelector(".GitHubApi__input")
    .querySelector("input")
    .addEventListener("focus", (event) => {
        console.log("e");
        searchDiv.style.display = "flex";
        background.style.display = "block";
        inputRender();
    });

background.addEventListener("click", () => {
    searchDiv.style.display = "none";
    background.style.display = "none";
});

document
    .querySelector(".GitHubApi__input")
    .addEventListener("click", (event) => {
        event.stopPropagation();
    });

Next.addEventListener("click", () => {
    if (repos.total_count / 10 > Page.innerText) {
        Page.innerText = Number(Page.innerText) + 1;
        fetchRepos("", Page.innerText);
    }
});

Prev.addEventListener("click", () => {
    console.log(repos);
    if (Page.innerText > 1) {
        Page.innerText = Number(Page.innerText) - 1;
        fetchRepos("", Page.innerText);
    }
});


addEventListener('keydown', (e)=>{
    if(e.keyCode==27){
        searchDiv.style.display = "none";
        background.style.display = "none";
        mainInput.blur()
    }
})

addEventListener('keydown', (e)=>{
    if(e.keyCode==13 && searchDiv.style.display == "flex"){
        search()
        mainInput.blur()
    }
})

let i =0

addEventListener('keydown', (e)=>{
    if(e.keyCode==40 && searchDiv.style.display == "flex"){
        const searchList = searchDiv.querySelectorAll('.UnitSearch')
        mainInput.value = searchList[i].innerText;
        searchList[i].classList = 'UnitSearch_hover'
        console.log(searchList);
        i++
    }
})

addEventListener('keydown', (e)=>{
    
    if(e.keyCode==38 && searchDiv.style.display == "flex"){
        const searchList = searchDiv.querySelectorAll('div')
        searchList[i].classList = 'UnitSearch_hover'
        mainInput.value = searchList[i].innerText;
        console.log(i);
        i--
    }
})