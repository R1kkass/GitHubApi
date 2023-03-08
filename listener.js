document.querySelector('.GitHubApi__input').querySelector('input').addEventListener("focus", (event) => {
    console.log('e');
    document.querySelector('.GitHubApi__history').style.display='flex'
    background.style.display='block'
    inputRender()
});

background.addEventListener('click',()=>{
    document.querySelector('.GitHubApi__history').style.display='none'
    background.style.display='none'
})

document.querySelector('.GitHubApi__input').addEventListener("click", (event) => {
    event.stopPropagation();
});


Next.addEventListener('click', ()=>{
    if(repos.total_count/10>Page.innerText){
        Page.innerText=Number(Page.innerText)+1
        fetchRepos('', Page.innerText)
    }
})

Prev.addEventListener('click', ()=>{
    console.log(repos);
    if(Page.innerText>1){
        Page.innerText=Number(Page.innerText)-1
        fetchRepos('', Page.innerText)
    }
})