const fireEvents = () => {
  const ham = document.querySelector(".hamburger")
  ham.addEventListener("click", () => {
    ham.classList.toggle("active")
    document.querySelector("nav ul").classList.toggle("active")
  })
  document.querySelector(".sun").onclick = (e) => {
    document.documentElement.classList.remove("dark")
    document.querySelector(".theme .inner").classList.remove("dark")
    localStorage.setItem("theme", "light")
  }

  //moon
  document.querySelector(".moon").onclick = (e) => {
    document.documentElement.classList.add("dark")
    document.querySelector(".theme .inner").classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
}

fireEvents()

document.addEventListener("astro:after-swap", () => {
  fireEvents()
})
