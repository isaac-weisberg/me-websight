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
        backgroundColor: "#FFD662",
        textColor: "#000000"
    },
    {
        backgroundColor: "#E8B5CE",
        textColor: "#000000"
    },
    {
        backgroundColor: "#F0EAD6",
        textColor: "#000000"
    },
    {
        backgroundColor: "#006E6D",
        textColor: "#FFFFFF"
    },
    {
        backgroundColor: "#00A591",
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