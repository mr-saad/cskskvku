let controller
const fireEvents = () => {
  controller?.abort()
  controller = new AbortController()
  const { signal } = controller

  const hamburger = document.querySelector(".hamburger"),
  root = document.documentElement,
  inner = document.querySelector(".theme .inner"),
  ul = document.querySelector("nav ul"),
  sun = document.querySelector(".sun"),
  moon = document.querySelector(".moon")

  const theme = localStorage.getItem("theme")
  if(theme === "dark") {
    root.classList.add("dark")
    inner.classList.add("dark")
  } else {
    root.classList.remove("dark")
    inner.classList.remove("dark")
  }

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    ul.classList.toggle("active")
  }, {signal})

  sun.addEventListener("click", () => {
    root.classList.remove("dark")
    inner.classList.remove("dark")
    localStorage.setItem("theme", "light")
  }, {signal})

  //moon
  moon.addEventListener("click", () => {
    root.classList.add("dark")
    inner.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }, {signal})
}

fireEvents()

document.addEventListener("astro:after-swap", () => {
  fireEvents()
})
