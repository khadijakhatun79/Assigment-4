// 2 ta faka array 
let interviewlist = [];
let rejectedlist = [];


let total = document.getElementById('totalcount');
let Interviewcount = document.getElementById('Interviewcount');
let rejectedCount = document.getElementById('rejectedCount')

const allCardSection = document.getElementById('Allcards');
const mainContainer = document.querySelector('main')
// console.log(mainContainer);


const allFilterBtn = document.getElementById('All-filter-btn')
const InterviewFilterBtn = document.getElementById('Interview-filter-btn')
const RejectedFilterBtn = document.getElementById('Rejected-filter-btn')

// const allFilterBtn = document.getElementById('All-filter-btn')
// allFilterBtn.addEventListener('click',function(){
//     alert("click from add even")
// })

function calculatecount(){
    total.innerText = allCardSection.children.length
    Interviewcount.innerText = interviewlist.length
    rejectedCount.innerText = rejectedlist.length
}

// function call
calculatecount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
    InterviewFilterBtn.classList.remove('bg-black','text-white')
    RejectedFilterBtn.classList.remove('bg-black','text-white')


     allFilterBtn.classList.add('bg-gray-300','text-black')
    InterviewFilterBtn.classList.add('bg-gray-300','text-black')
    RejectedFilterBtn.classList.add('bg-gray-300','text-black')

    console.log(id);
    const selected = document.getElementById(id)
    console.log(selected);
}