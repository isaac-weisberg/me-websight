const bgColorableElements = [ ...document.getElementsByClassName("cow") ] as HTMLElement[]
const borderColorableElements = [...document.getElementsByClassName("bow") ] as HTMLElement[]

type Styling = [string, string, string]

// Thanks to https://www.w3schools.com/colors/ for the colors
const themes: Styling[] = [
    [
        "FFD662",
        "000000",
        'DDB440'
    ],
    [
        "00539C",
        "FFFFFF",
        '00317A'
    ],
    [
        "F7CAC9",
        "000000",
        'D5A8A7'
    ],
    [
        "00758F",
        "FFFFFF",
        '00536D'
    ],
    [
        "56C6A9",
        "000000",
        '34A487'
    ],
    [
        "FFA500",
        "FFFFFF",
        'DD8300'
    ],
    [
        "CD212A",
        "000000",
        'AB0008'
    ],
    [
        "E8B5CE",
        "000000",
        'C693AC'
    ],
    [
        "F0EAD6",
        "000000",
        'D0C8B4'
    ]
]

function addingPound(str: string): string {
    return `#${str}`
}

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
        element.style.backgroundColor = addingPound(styling[0])
        element.style.color = addingPound(styling[1])
    })

    borderColorableElements.forEach(el => {
        el.style.borderColor = addingPound(styling[0])
    })
}

function nextStyling() {
    const randomIndex = nextIndex()
    const styling = themes[randomIndex]
    applyTheme(styling)
}

initialStyling()
