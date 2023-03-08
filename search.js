function search() {
    if (mainInput.value) {
        let set = new Set(JSON.parse(localStorage.getItem("historySearch")))
        set.add(mainInput.value);
        localStorage.setItem("historySearch", JSON.stringify([...set]));
        fetchRepos();
    } else {
        mainInput.style.boxShadow = "0 0 5px 2px red";
        mainInput.placeholder="Поле поиска пустое"
    }
}

function renderSelect(filterArr) {
    let history = document.querySelector(".GitHubApi__history");

    history.innerHTML = "";
    let arr = filterArr || JSON.parse(localStorage.getItem("historySearch")).reverse();

    let len = arr.length > 5 ? 5 : arr.length;
    for (let i = 0; i < len; i++) {
        const createDiv = document.createElement("div");
        const createDiv2 = document.createElement("div");
        createDiv.addEventListener("click", () => {
            fetchRepos(arr[i]);
        });
        createDiv2.innerHTML = arr[i];
        createDiv.appendChild(createDiv2);
        history.appendChild(createDiv);
    }
}

function inputRender(){
    let arr = JSON.parse(localStorage.getItem("historySearch")).reverse();
    let filterArr = arr.filter((key)=>{
        return key.includes(mainInput.value) && key!=mainInput.value
    })
    renderSelect(filterArr)
}