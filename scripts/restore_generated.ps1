$mapping = @{
    "https://commons.wikimedia.org/wiki/Special:FilePath/Staraya_Ladoga_fortress_from_Volkhov_river.jpg?width=640" = "city_ladoga_1778921025104.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vasnetsov_Novgorod_Torg.jpg?width=640" = "city_novgorod_1778921044811.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Smolensk_Kremlin_wall_1.jpg?width=640" = "city_smolensk_1778921062763.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kievan_Rus_by_Ivan_Bilibin.jpg?width=640" = "city_kiev_1778921082705.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Constantinople_1453.jpg?width=640" = "city_constantinople_1778921101295.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Yaroslav_Mudry_by_N.Roerich.jpg?width=640" = "epoch_1054_golden_1778920950788.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Batyi_invades_Rus%27_by_Kivshenko.jpg?width=640" = "epoch_1237_invasion_1778920967437.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Apollinary_Vasnetsov_007.jpg?width=640" = "epoch_1462_moscow_1778921005663.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Oleg_of_Novgorod.jpg?width=640" = "epoch_882_birth_1778920930595.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kulikovo_battle.jpg?width=640" = "epoch_1380_kulikovo_1778920990072.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Assumption_Cathedral_in_Vladimir.jpg?width=640" = "city_vladimir_1778921158897.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bolgar_ruins.jpg?width=640" = "city_bulgar_1778921119974.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Khazar_warrior.jpg?width=640" = "city_itil_1778921139200.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vasnetsov_Kiev.jpg?width=640" = "region_kievan_rus_1778922076915.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/GoldenHordeMessenger.jpg?width=640" = "region_golden_horde_1778921887508.png"
    "https://commons.wikimedia.org/wiki/Special:FilePath/Ryabushkin_novgorod_veche.jpg?width=640" = "epoch_1380_kulikovo_1778920990072.png" 
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kivshenko_Dolobsky_congress.jpg?width=640" = "city_kiev_1778921082705.png" 
    "https://commons.wikimedia.org/wiki/Special:FilePath/Gediminas_tower_Vilnius.jpg?width=640" = "city_smolensk_1778921062763.png" 
}

$filesToProcess = @("index.html", "app.js", "test_images.html")

foreach ($file in $filesToProcess) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($key in $mapping.Keys) {
            $content = $content -replace [regex]::Escape($key), $mapping[$key]
        }
        Set-Content $file $content
        Write-Host "Restored generated URLs in $file"
    }
}
