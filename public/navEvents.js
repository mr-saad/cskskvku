let controller
const fireEvents = () => {
  new Lenis({ autoRaf: true })
  AOS.init()
  controller?.abort()
  controller = new AbortController()
  const { signal } = controller

  const hamburger = document.querySelector(".hamburger"),
    root = document.documentElement,
    ul = document.querySelector("nav ul"),
    themeSwitch = document.querySelector(".themeSwitch")

  let theme = localStorage.getItem("theme")
  if (theme === "dark") {
    root.classList.add("dark")
    themeSwitch.classList.add("dark")
  } else {
    root.classList.remove("dark")
    themeSwitch.classList.remove("dark")
  }

  hamburger.addEventListener(
    "click",
    () => {
      hamburger.classList.toggle("active")
      ul.classList.toggle("active")
    },
    { signal },
  )

  themeSwitch.addEventListener(
    "click",
    () => {
      theme = localStorage.getItem("theme")
      root.classList.toggle("dark")
      themeSwitch.classList.toggle("dark")
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
    },
    { signal },
  )
}

fireEvents()

document.addEventListener("astro:after-swap", () => {
  localStorage.getItem("theme") === "dark" &&
    document.documentElement.classList.add("dark")
  fireEvents()
})
