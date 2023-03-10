let repos = [];
const mainInput = document
    .querySelector(".GitHubApi__header")
    .querySelector("input");


async function fetchRepos(param) {
    document.querySelector(".GitHubApi__history").style.display = "none";
    background.style.display = "none";

    const search = param || mainInput.value;
    mainInput.value=search

    loaderShow();
    fetch(
        `https://api.github.com/search/repositories?q=${search || ''}&page=${Page?.innerText || 1}&per_page=10`
    )
    .then((e)=>{
        return e.json();
    })
    .then((e)=>{
        if(e.message){
            root.innerHTML=`<p>Ошибка</p>`
            document.querySelector('.Pagination').style.display='none'
        }else{
            repos = e
            render();
            mainInput.style.boxShadow = "0 0 5px 1px gray";
            console.log(e);
            if(e.items?.length){
                document.querySelector('.Pagination').style.display='flex'
            }
        }
        loaderShow();
    })
    .catch(()=>{
        root.innerHTML=`<p>Ошибка</p>`
    })


}

root.innerHTML = "<p>Введите поиск</p>";

function render() {
    root.innerHTML = "";
    if (repos.items?.length == 0) {
        root.innerHTML = "<p>Ничего не найдено</p>";
        document.querySelector('.Pagination').style.display='none'
    }
    for (let i = 0; i < repos.items?.length; i++) {
        const reposDiv = document.createElement("div");
        reposDiv.classList = "GitHubApi__unitRepos";
        reposDiv.innerHTML = `
            <div class="avatar"><img src="${repos.items[i].owner.avatar_url}"/></div>
            <div class="login">${repos.items[i].owner.login}</div>
            <div class="name"><a href="${repos.items[i].html_url}" target="_blank">${repos.items[i].name}</a></div>
            <div class="language">Язык: ${repos.items[i].language}</div>
        `;
        root.appendChild(reposDiv);
    }
}

function pagination(){
    render('', Page.innerText)
}

