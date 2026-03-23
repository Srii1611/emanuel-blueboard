# Run from project root: C:\Users\manne\OneDrive\Desktop\emanuel-blueboard
# Step 1: Rename image files

$renames = @{
    "EPRS8484.JPG" = "vaulted-ceiling-plastering-new-build.jpg"
    "FSPS9920.JPG" = "architectural-diamond-ceiling-plaster.jpg"
    "ISVC9343.JPG" = "blueboard-installation-residential.jpg"
    "QMWO3515.JPG" = "full-room-blueboard-new-construction.jpg"
    "XJNO5519.JPG" = "new-construction-team-install.jpg"
    "THJP2626.JPG" = "drop-ceiling-renovation-metrowest.jpg"
    "WDQP0406.JPG" = "wall-repair-patching-framingham.jpg"
    "HZNC7100.JPG" = "angled-ceiling-smooth-plaster-finish.jpg"
    "QKOP5402.JPG" = "blueboard-close-up-detail.jpg"
    "HPWQ5817.JPG" = "new-build-exterior-metrowest-ma.jpg"
    "VHNO6568.JPG" = "curved-stairwell-blueboard-installation.jpg"
    "CSHV7891.JPG" = "commercial-job-site-large-scale.jpg"
    "GCUD7035.JPG" = "emanuel-owner-master-plasterer.jpg"
    "Emanuel_Logo.png" = "emanuel-blueboard-logo.png"
}

foreach ($old in $renames.Keys) {
    $oldPath = "public\images\$old"
    $newPath = "public\images\$($renames[$old])"
    if (Test-Path $oldPath) {
        Rename-Item $oldPath $renames[$old]
        Write-Host "Renamed: $old -> $($renames[$old])" -ForegroundColor Green
    } else {
        Write-Host "SKIP (not found): $old" -ForegroundColor Yellow
    }
}

Write-Host "`nDone! Now apply the code patch next." -ForegroundColor Cyan
