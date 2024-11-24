const heroesStats = JSON.parse(
    localStorage.getItem("userMatchHistory") || "[]"
)

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