const bgColorableElements = [ ...document.getElementsByClassName("cow") ] as HTMLElement[]
const borderColorableElements = [...document.getElementsByClassName("bow") ] as HTMLElement[]

interface Styling {
    backgroundColor: string
    textColor: string
}

// Thanks to https://www.w3schools.com/colors/ for the colors
const themes: Styling[] = [
    {
        backgroundColor: "#F5DF4D",
        textColor: "#000000"
    },
    {
        backgroundColor: "#363945",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#9BB7D4",
        textColor: "#000000"
    },
    {
        backgroundColor: "#FDAC53",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#0072B5",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#A0DAA9",
        textColor: "#000000"
    },
    {
        backgroundColor: "#939597",
        textColor: "#FFFFFF"
    }
]

let index = 0

function nextIndex(): number {
    index++
    if (index >= themes.length)
        index = 0
    return index
}

function initialStyling() {
    const styling = themes[index]
    applyTheme(styling)
}

function applyTheme(styling: Styling) {
    bgColorableElements.forEach(element => {
        element.style.backgroundColor = styling.backgroundColor
        element.style.color = styling.textColor
    })

    borderColorableElements.forEach(el => {
        el.style.borderColor = styling.backgroundColor
    })
}

function nextStyling() {
    const randomIndex = nextIndex()
    const styling = themes[randomIndex]
    applyTheme(styling)
}

initialStyling()
