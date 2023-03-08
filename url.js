function redirect(page, param){
    let url = new URL(window.location);
    const search = param || mainInput.value;

    url.searchParams.set('q', search);
    url.searchParams.set('page', page);
    
    window.location=url
    fetchRepos()
}
