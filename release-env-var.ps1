$manifestPath='./manifest-example.yml'
$outputPath='./manifest-test.yml'
$envJson = get-content -raw -path './src/assets/config/app.config.json'| Convertfrom-Json | ConvertTo-Json -Compress -Depth 100
((Get-Content -path $manifestPath -Raw) -replace 'MY_ENV_OBJ_HERE', $envJson) | Set-Content -Path $outputPath -Force
# May be necessary - check: .Replace("`r`n","`n")