function openCandidate(index) {
  const tabs = document.querySelectorAll(".tab");
  const candidates = document.querySelectorAll(".candidate");

  tabs.forEach(tab => tab.classList.remove("active"));
  candidates.forEach(c => c.classList.remove("active"));

  tabs[index].classList.add("active");
  candidates[index].classList.add("active");
}