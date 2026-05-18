$mapping = @{
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Staraya_Ladoga_fortress_from_Volkhov_river.jpg/640px-Staraya_Ladoga_fortress_from_Volkhov_river.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Staraya_Ladoga_fortress_from_Volkhov_river.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vasnetsov_Novgorod_Torg.jpg/640px-Vasnetsov_Novgorod_Torg.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Vasnetsov_Novgorod_Torg.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Smolensk_Kremlin_wall_1.jpg/640px-Smolensk_Kremlin_wall_1.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Smolensk_Kremlin_wall_1.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kievan_Rus_by_Ivan_Bilibin.jpg/640px-Kievan_Rus_by_Ivan_Bilibin.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Kievan_Rus_by_Ivan_Bilibin.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Constantinople_1453.jpg/640px-Constantinople_1453.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Constantinople_1453.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Yaroslav_Mudry_by_N.Roerich.jpg/640px-Yaroslav_Mudry_by_N.Roerich.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Yaroslav_Mudry_by_N.Roerich.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Batyi_invades_Rus'_by_Kivshenko.jpg/640px-Batyi_invades_Rus'_by_Kivshenko.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Batyi_invades_Rus%27_by_Kivshenko.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Apollinary_Vasnetsov_007.jpg/640px-Apollinary_Vasnetsov_007.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Apollinary_Vasnetsov_007.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Oleg_of_Novgorod.jpg/640px-Oleg_of_Novgorod.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Oleg_of_Novgorod.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kulikovo_battle.jpg/640px-Kulikovo_battle.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Kulikovo_battle.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Assumption_Cathedral_in_Vladimir.jpg/640px-Assumption_Cathedral_in_Vladimir.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Assumption_Cathedral_in_Vladimir.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bolgar_ruins.jpg/640px-Bolgar_ruins.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Bolgar_ruins.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Khazar_warrior.jpg/640px-Khazar_warrior.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Khazar_warrior.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Vasnetsov_Kiev.jpg/640px-Vasnetsov_Kiev.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Vasnetsov_Kiev.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GoldenHordeMessenger.jpg/640px-GoldenHordeMessenger.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/GoldenHordeMessenger.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ryabushkin_novgorod_veche.jpg/640px-Ryabushkin_novgorod_veche.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Ryabushkin_novgorod_veche.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kivshenko_Dolobsky_congress.jpg/640px-Kivshenko_Dolobsky_congress.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Kivshenko_Dolobsky_congress.jpg?width=640"
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gediminas_tower_Vilnius.jpg/640px-Gediminas_tower_Vilnius.jpg" = "https://commons.wikimedia.org/wiki/Special:FilePath/Gediminas_tower_Vilnius.jpg?width=640"
}

$filesToProcess = @("index.html", "app.js", "test_images.html")

foreach ($file in $filesToProcess) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($key in $mapping.Keys) {
            $content = $content -replace [regex]::Escape($key), $mapping[$key]
        }
        Set-Content $file $content
        Write-Host "Updated URLs in $file"
    }
}
