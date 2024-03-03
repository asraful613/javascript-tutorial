const loadCatagory =async () =>{
    const response=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data=await response.json();
    console.log(data.data.news_category);
    data.data.news_category.forEach(element => {
        const catagoryContainer =document.getElementById('catagory-bar-container');
        const div =document.createElement('div');
        div.innerHTML = `
        <button onclick="loadNews('${element.category_id}')" class="btn">${element.category_name}</button>
        `
        catagoryContainer.appendChild(div);
    });
}

const loadNews =async (catId) => {
  document.getElementById('load-spinner').style.display="block"
  console.log(catId);
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await response.json();
    const newsContainer =document.getElementById('news-container')
    newsContainer.innerHTML='';
    // if(newsContainer.length>0){
    //   console.log('data ace');
    // }
    // else{
    //   console.log('data not ace');
    // }
    data.data.forEach((item) =>{
    document.getElementById('load-spinner').style.display="none";
    const div = document.createElement('div');
    div.classList.add('single-news');
    div.innerHTML=`
    <figure><img src="${item.image_url}" alt="Movie"/></figure>
            <div class="card-body">
              <h2 class="card-title">${item.title}!</h2>
              <p>${item.details.slice(0,200)}</p>
              <div class="card-actions justify-end">
                <button onclick="check('${item.title}'); my_modal_1.showModal()" class="btn btn-primary">Details</button>
              </div>
    `
    newsContainer.appendChild(div);
    })
}

const check = async(input) =>{
  console.log(input);
  const response = await fetch(`https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`);
  const data = await response.json();
  console.log(data);
  my_modal_1.showModal()
}

const handleSearch = ()=> {
  const value=document.getElementById('search-box').value;
  if(value){
    loadNews(value)
  }
  else{
    alert('please enter a valid catId')
  }
}


loadNews("01")
loadCatagory()
