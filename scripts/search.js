async function storeSearchterm(term) {
    try {
        let res=await fetch(term);
        let data=await res.json();
        return (data);
    } catch (error) {
        console.log(error);
    }
}

export default storeSearchterm