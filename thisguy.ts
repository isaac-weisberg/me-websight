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

function nextStyling() {
    const randomIndex = getRandomInt(themes.length)
    const styling = themes[randomIndex]
    colorableElements.forEach(element => {
        apply(styling, element)
    })
}