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
        backgroundColor: "#2A4B7C",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#F5D6C6",
        textColor: "#000000"
    },
    {
        backgroundColor: "#CE5B78",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#FA9A85",
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

function nextStyling() {
    const randomIndex = nextIndex()
    const styling = themes[randomIndex]
    colorableElements.forEach(element => {
        apply(styling, element)
    })
}