$mapping = @{
    "city_ladoga_1778921025104.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Staraya_Ladoga_fortress_from_Volkhov_river.jpg/640px-Staraya_Ladoga_fortress_from_Volkhov_river.jpg"
    "city_novgorod_1778921044811.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vasnetsov_Novgorod_Torg.jpg/640px-Vasnetsov_Novgorod_Torg.jpg"
    "city_smolensk_1778921062763.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Smolensk_Kremlin_wall_1.jpg/640px-Smolensk_Kremlin_wall_1.jpg"
    "city_kiev_1778921082705.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kievan_Rus_by_Ivan_Bilibin.jpg/640px-Kievan_Rus_by_Ivan_Bilibin.jpg"
    "city_constantinople_1778921101295.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Constantinople_1453.jpg/640px-Constantinople_1453.jpg"
    "epoch_1054_golden_1778920950788.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Yaroslav_Mudry_by_N.Roerich.jpg/640px-Yaroslav_Mudry_by_N.Roerich.jpg"
    "epoch_1237_invasion_1778920967437.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Batyi_invades_Rus'_by_Kivshenko.jpg/640px-Batyi_invades_Rus'_by_Kivshenko.jpg"
    "epoch_1462_moscow_1778921005663.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Apollinary_Vasnetsov_007.jpg/640px-Apollinary_Vasnetsov_007.jpg"
    "epoch_882_birth_1778920930595.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Oleg_of_Novgorod.jpg/640px-Oleg_of_Novgorod.jpg"
    "epoch_1380_kulikovo_1778920990072.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Kulikovo_battle.jpg/640px-Kulikovo_battle.jpg"
    "city_vladimir_1778921158897.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Assumption_Cathedral_in_Vladimir.jpg/640px-Assumption_Cathedral_in_Vladimir.jpg"
    "city_bulgar_1778921119974.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bolgar_ruins.jpg/640px-Bolgar_ruins.jpg"
    "city_itil_1778921139200.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Khazar_warrior.jpg/640px-Khazar_warrior.jpg"
    "region_kievan_rus_1778922076915.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Vasnetsov_Kiev.jpg/640px-Vasnetsov_Kiev.jpg"
    "region_golden_horde_1778921887508.png" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GoldenHordeMessenger.jpg/640px-GoldenHordeMessenger.jpg"
}

$filesToProcess = @("index.html", "app.js", "test_images.html")

foreach ($file in $filesToProcess) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        foreach ($key in $mapping.Keys) {
            $content = $content -replace [regex]::Escape($key), $mapping[$key]
        }
        Set-Content $file $content
        Write-Host "Reverted URLs in $file"
    }
}
