function generateNumber () {
    return Math.floor(Math.random() * 3)    
}

const category = {
    name: ['LeBron', 'Damian', 'Ja', 'Zion'],
    adjective: ['best', 'worst', 'lovable', 'creative'],
    sports: ['basketball', 'volleyball', 'baseball', 'football']
}

function randomMessages () {
    for (const prop in category) {
        switch (prop) {
            case 'name':
                console.log(`I am ${category[prop][generateNumber()]}!`)
                break
            case 'adjective':
                console.log(`I am the ${category[prop][generateNumber()]}!`)
                break
            case 'sports':
                console.log(`I played ${category[prop][generateNumber()]}!`)
                break
        }
    }
}

randomMessages()