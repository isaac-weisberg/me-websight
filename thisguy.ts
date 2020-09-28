const colorableElements: HTMLElement[] = [ ...document.getElementsByClassName("cow") ] as HTMLElement[]

interface Styling {
    backgroundColor: string
    textColor: string
}

function apply(styling: Styling, element: HTMLElement) {
    element.style.backgroundColor = styling.backgroundColor
    element.style.color = styling.textColor
}

const themes: Styling[] = [
    {
        backgroundColor: "#9B1B30",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#E08119",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#577284",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#F96714",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#264E36",
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
    colorableElements.forEach(element => {
        apply(styling, element)
    })
}

function nextStyling() {
    const randomIndex = nextIndex()
    const styling = themes[randomIndex]
    applyTheme(styling)
}

initialStyling()
