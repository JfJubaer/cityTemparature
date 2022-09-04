


const loadTemp = city =>{
    const cityKey=`97b7d4c1f8685e64a76f477cf05b086e`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${cityKey}&units=metric`)
    .then(res=>res.json()
    .then(data=>displayTemp(data)));

}

const displayTemp = data =>{
    // console.log(data);
    setInnertext ('tempShow',data.main.temp);
    setInnertext ('weather',data.weather[0].main);
    setInnertext ('city',data.name);

}

const setInnertext = (id,text)=>{
    const container = document.getElementById(id);
    container.innerText = text ;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const inputfield =document.getElementById('search-field');
    const input = inputfield.value ;
    loadTemp(input);
})

