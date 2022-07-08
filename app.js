let imagearrow=document.querySelectorAll('.arrow');
let answer=document.querySelectorAll('.answer');

imagearrow.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('toggle')
      item.nextElementSibling.classList.toggle('active');
      
    })
})