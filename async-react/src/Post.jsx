async function post(url){
    const response = fetch(url, {method: "GET"})
    return response.json();
}