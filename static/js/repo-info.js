document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data-repo-type='github']")
    .forEach(el => {
      const repo = el.dataset.repo   // formato "user/repo"
      const starsEl = el.querySelector("[data-repo-stars]")
      const forksEl = el.querySelector("[data-repo-forks]")

      if (!repo || !starsEl || !forksEl) return

      // Tenta ler cache de 10h no localStorage
      const cacheKey = `repoFacts:${repo}`
      const cached = JSON.parse(localStorage.getItem(cacheKey) || "null")
      const tooOld = !cached || (Date.now() - cached.fetched) > 10*60*60*1000

      const applyFacts = facts => {
        if (facts.stars) starsEl.textContent = facts.stars
        if (facts.forks) forksEl.textContent = facts.forks
      }

      if (cached && !tooOld) {
        applyFacts(cached)
      } else {
        fetch(`https://api.github.com/repos/${repo}`)
          .then(r => r.ok ? r.json() : Promise.reject(r.status))
          .then(d => {
            const facts = { stars: d.stargazers_count, forks: d.forks_count }
            localStorage.setItem(cacheKey, JSON.stringify({ ...facts, fetched: Date.now() }))
            applyFacts(facts)
          })
          .catch(() => { /* silencia erros e deixa “–” */ })
      }
    })
})
