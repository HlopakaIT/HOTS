const heroesStats = [ 
    {
        hero: "Genji",
        win: true,
    },
    {
        hero: "Hanzo",
        win: false,
    },
    {
        hero: "Sylvanas",
        win: true,
    },
    {
        hero: "Hanzo",
        win: true,
    },
    {
        hero: "Sylvanas",
        win: true,
    },
    {
        hero: "Genji",
        win: false,
    },
]

const showStatsButton = document.getElementById("show_stats")

showStatsButton.addEventListener("click", showStats)

function showStats(event) {
    if(document.querySelector(".stats_element")) {
        document.querySelector(".stats_element").remove()
    }
    
    const currentSelected = document.getElementById("select")
    const heroStats = heroesStats.filter((heroName) => currentSelected.value === heroName.hero)
    const statsElement = document.createElement("p")
    statsElement.classList.add("stats_element")
    const statsBlock = document.getElementById("stats_block")


    const wins = heroStats.reduce((winsSum, win) => {
        if( win.win === true ) return winsSum + 1

        return winsSum
    }, 0)


    const loses = heroStats.reduce((losesSum, lose) => {
        if( lose.win === false ) return losesSum + 1

        return losesSum
    }, 0)


    const wr = (wins / heroStats.length) * 100
    
    statsElement.innerHTML = `W:${wins} L:${loses} WR:${wr.toFixed(2)}%`
       
    statsBlock.append(statsElement)
}

const recordButton = document.getElementById("add_record_button")


recordButton.addEventListener("click", addRecord)

const winLoseRadio = document.getElementsByName("win_lose")

function addRecord(event) {
    const heroTypeArea = document.getElementById("hero_type_area")
    for(i = 0; i < winLoseRadio.length; i++) {
        if(winLoseRadio[i].checked) {
            const gameScore = {
                hero: heroTypeArea.value,
                win: switchScoreIntoTrueFalse()
            }
            heroesStats.push(gameScore)
        }
    }

 
}

function switchScoreIntoTrueFalse() {
    if(winLoseRadio[i].value === "win") return true
    
    return false
}