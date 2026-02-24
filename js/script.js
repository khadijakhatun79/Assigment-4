let total = document.getElementById('totalcount');
let interview = document.getElementById('Interview');
let rejected = document.getElementById('Rejected')

const allcardssection = document.getElementById('Allcards');



function calculatecount(){
    total.innerText = allcardssection .children .length
}

// function call
calculatecount()