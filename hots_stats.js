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
    const currentSelected = document.getElementById("select")
    const heroStats = heroesStats.filter((heroName) => currentSelected.value === heroName.hero)
    const statsElement = document.createElement("p")
    statsElement.classList.add("stats_element")
    const statsBlock = document.getElementById("stats_block")
    const wins = heroStats.reduce((winsSum, win) => winsSum + win, 0)
    const loses = heroStats.reduce((losesSum, lose) =>  losesSum + lose, 0)
    
    statsBlock.innerHTML = `W:${wins} L:${loses} WR:`
    
    
    
    statsBlock.append(statsElement)











console.log("Слава Україні")
console.log(heroStats)
console.log(wins)

}