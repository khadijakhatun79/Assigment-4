// ================= ARRAY =================
let interviewList = [];
let rejectedList = [];

// ================= SELECTORS =================
const total = document.getElementById('totalcount');
const Interviewcount = document.getElementById('Interviewcount');
const rejectedCount = document.getElementById('rejectedCount');

const allCardSection = document.getElementById('Allcards');
const mainContainer = document.querySelector('main');
const jobCountText = document.querySelector('.job-count');

const allFilterBtn = document.getElementById('All-filter-btn');
const interviewFilterBtn = document.getElementById('Interview-filter-btn');
const rejectedFilterBtn = document.getElementById('Rejected-filter-btn');

// ================= INITIAL COUNT =================
function calculateCount(currentTab = 'All') {
    const allCards = allCardSection.querySelectorAll('.card');
    total.innerText = allCards.length;
    Interviewcount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (currentTab === 'All') {
        jobCountText.innerText = `${allCards.length} jobs`;
    } else {
        const visibleCards = Array.from(allCards).filter(c => !c.classList.contains('hidden')).length;
        jobCountText.innerText = `${visibleCards} of ${allCards.length} jobs`;
    }
}
calculateCount();

// ================= TAB FUNCTIONS =================
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allFilterBtn.classList.add('bg-gray-300');
    interviewFilterBtn.classList.add('bg-gray-300');
    rejectedFilterBtn.classList.add('bg-gray-300');

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove('bg-gray-300');
    selectedBtn.classList.add('bg-[#3B82F6]', 'text-white');

    const cards = allCardSection.querySelectorAll('.card');

    if (id === 'All-filter-btn') {
        cards.forEach(c => c.classList.remove('hidden'));
        calculateCount('All');
    } 
    else if (id === 'Interview-filter-btn') {
        cards.forEach(c => {
            const status = c.querySelector('.light')?.innerText;
            c.classList.toggle('hidden', status !== 'Interview');
        });
        calculateCount('Other');
    } 
    else if (id === 'Rejected-filter-btn') {
        cards.forEach(c => {
            const status = c.querySelector('.light')?.innerText;
            c.classList.toggle('hidden', status !== 'Rejected');
        });
        calculateCount('Other');
    }
}

// ================= EVENT DELEGATION =================
mainContainer.addEventListener('click', function (event) {
    const card = event.target.closest('.card');
    if (!card) return;

    const statusLabel = card.querySelector('.light');
    const companyName = card.querySelector('.boxTitle')?.innerText;

    // ===== INTERVIEW =====
    if (event.target.classList.contains('Interview-btn')) {
        if (!interviewList.includes(companyName)) interviewList.push(companyName);
        rejectedList = rejectedList.filter(item => item !== companyName);

        if (statusLabel) statusLabel.innerText = 'Interview';
        statusLabel?.classList.remove('bg-gray-200', 'bg-red-500', 'text-red-500');
        statusLabel?.classList.add('bg-green-500', 'text-white');

        toggleStyle('All-filter-btn'); // Show All tab after click
    }

    // ===== REJECTED =====
    if (event.target.classList.contains('rejected-btn')) {
        if (!rejectedList.includes(companyName)) rejectedList.push(companyName);
        interviewList = interviewList.filter(item => item !== companyName);

        if (statusLabel) statusLabel.innerText = 'Rejected';
        statusLabel?.classList.remove('bg-gray-200', 'bg-green-500', 'text-green-500');
        statusLabel?.classList.add('bg-red-500', 'text-white');

        toggleStyle('All-filter-btn'); // Show All tab after click
    }

    // ===== DELETE =====
    if (event.target.classList.contains('fa-trash-can')) {
        interviewList = interviewList.filter(item => item !== companyName);
        rejectedList = rejectedList.filter(item => item !== companyName);
        card.remove();
        calculateCount('All');
    }

});