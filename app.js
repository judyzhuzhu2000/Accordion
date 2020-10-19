const accordionItemsEl = document.getElementsByClassName("accordion__item");



function acccordion() {

    for(let item of accordionItemsEl) {
        
           let accHeader = item.firstElementChild;
           
            accHeader.addEventListener("click",function() {
                let accDetails = accHeader.nextElementSibling;
                if(accDetails.style.maxHeight) { //maxheight>0，就要关上
                    accDetails.style.maxHeight = null;//文字隐藏显示+号
                    accHeader.lastElementChild.innerHTML = "+";
                }else { //或者>0,就要打开，显示-号
                    accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                    accHeader.lastElementChild.innerHTML = "-";
                }
            })
        }
    }
    

acccordion();