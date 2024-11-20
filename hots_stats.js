const heroesStats = JSON.parse(
    localStorage.getItem("userMatchHistory") || "[]"
)


const showStatsButton = document.getElementById("show-stats")

showStatsButton.addEventListener("click", showStats)

function showStats(event) {
    if(document.querySelector(".stats-element")) {
        document.querySelector(".stats-element").remove()
    }
    
    const currentSelected = document.getElementById("select")
    const heroStats = heroesStats.filter((heroName) => currentSelected.value === heroName.hero)
    const statsElement = document.createElement("p")
    statsElement.classList.add("stats-element")
    const statsBlock = document.getElementById("stats-block")


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


const recordButton = document.getElementById("add-record-button")

recordButton.addEventListener("click", addRecord)

const winLoseRadio = document.getElementsByName("win-lose")

function addRecord(event) {
    const heroTypeArea = document.getElementById("hero-type-area")
    for(let i = 0; i < winLoseRadio.length; i++) {
        if(winLoseRadio[i].checked) {
            const winLoseValue = winLoseRadio[i].value
            const gameScore = {
                hero: heroTypeArea.value,
                win: switchScoreIntoTrueFalse(winLoseValue)
            }

            heroesStats.push(gameScore)

            localStorage.setItem(
                "userMatchHistory",
                JSON.stringify(
                    heroesStats
                )
            )
        }
    }

}

function switchScoreIntoTrueFalse(winLoseValue) {
    if(winLoseValue === "win") return true
    
    return false
}

const clearMatchHistoryButton = document.getElementById("clear-match-history-button")

clearMatchHistoryButton.addEventListener("click", clearMatchHstory)

function clearMatchHstory(event) {
    localStorage.setItem(
        "userMatchHistory",
        JSON.stringify(
            []
        )
    )
    location.reload()
}