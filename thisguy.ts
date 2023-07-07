const bgColorableElements = [ ...document.getElementsByClassName("cow") ] as HTMLElement[]
const borderColorableElements = [...document.getElementsByClassName("bow") ] as HTMLElement[]

interface Styling {
    backgroundColor: string
    textColor: string
}

// Thanks to https://www.w3schools.com/colors/ for the colors
const themes: Styling[] = [
    {
        backgroundColor: "#FFD662",
        textColor: "#000000"
    },
    {
        backgroundColor: "#00539C",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#CD212A",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#56C6A9",
        textColor: "#000000"
    },
    {
        backgroundColor: "#F7CAC9",
        textColor: "#000000"
    }
]

let index = 3

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
