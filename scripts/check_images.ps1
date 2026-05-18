$urls = @(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Staraya_Ladoga_fortress_from_Volkhov_river.jpg/640px-Staraya_Ladoga_fortress_from_Volkhov_river.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vasnetsov_Novgorod_Torg.jpg/640px-Vasnetsov_Novgorod_Torg.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Smolensk_Kremlin_wall_1.jpg/640px-Smolensk_Kremlin_wall_1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kievan_Rus_by_Ivan_Bilibin.jpg/640px-Kievan_Rus_by_Ivan_Bilibin.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Constantinople_1453.jpg/640px-Constantinople_1453.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Vasnetsov_Kiev.jpg/640px-Vasnetsov_Kiev.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ryabushkin_novgorod_veche.jpg/640px-Ryabushkin_novgorod_veche.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kivshenko_Dolobsky_congress.jpg/640px-Kivshenko_Dolobsky_congress.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Apollinary_Vasnetsov_-_Kremlin_under_Ivan_III.jpg/640px-Apollinary_Vasnetsov_-_Kremlin_under_Ivan_III.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gediminas_tower_Vilnius.jpg/640px-Gediminas_tower_Vilnius.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Oleg_of_Novgorod.jpg/640px-Oleg_of_Novgorod.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Yaroslav_Mudry_by_N.Roerich.jpg/640px-Yaroslav_Mudry_by_N.Roerich.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Batyi_invades_Rus%27_by_Kivshenko.jpg/640px-Batyi_invades_Rus%27_by_Kivshenko.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Battle_of_Kulikovo%2C_1380.jpg/640px-Battle_of_Kulikovo%2C_1380.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Apollinary_Vasnetsov_007.jpg/640px-Apollinary_Vasnetsov_007.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Assumption_Cathedral_in_Vladimir.jpg/640px-Assumption_Cathedral_in_Vladimir.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bolgar_ruins.jpg/640px-Bolgar_ruins.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Khazar_warrior.jpg/640px-Khazar_warrior.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GoldenHordeMessenger.jpg/640px-GoldenHordeMessenger.jpg"
)

foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -Method Head -TimeoutSec 10 -UseBasicParsing -ErrorAction Stop
        $code = $r.StatusCode
        Write-Host "OK $code $u"
    } catch {
        Write-Host "FAIL $u"
    }
}
