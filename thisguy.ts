const colorableElements: HTMLElement[] = [ ...document.getElementsByClassName("cow") ] as HTMLElement[]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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
        textColor: ""
    }
]

function nextStyling() {
    const randomIndex = getRandomInt(themes.length)
    const styling = themes[randomIndex]
    colorableElements.forEach(element => {
        apply(styling, element)
    })
}