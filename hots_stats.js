const heroesStats = JSON.parse(
    localStorage.getItem("userMatchHistory") || "[]"
)


const showStatsButton = document.getElementById("show-stats")

showStatsButton.addEventListener("click", showStats)

function showStats(event) {
    
    const currentSelected = document.getElementById("select")
    const heroStats = heroesStats.filter((heroName) => currentSelected.value === heroName.hero)
    const statsBlock = document.getElementById("stats-block")
    const tableWins = document.getElementById("table-wins")
    const tableLoses = document.getElementById("table-losses")
    const tableWinrate = document.getElementById("table-winrate")


    const wins = heroStats.reduce((winsSum, win) => {
        if( win.win === true ) return winsSum + 1

        return winsSum
    }, 0)


    const loses = heroStats.reduce((losesSum, lose) => {
        if( lose.win === false ) return losesSum + 1

        return losesSum
    }, 0)


    const wr = (wins / heroStats.length) * 100

    tableWins.innerHTML = wins
    tableLoses.innerHTML = loses
    tableWinrate.innerHTML = `${wr.toFixed(2)}%`

    statsBlock.style.display = "table"
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
