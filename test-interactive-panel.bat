@echo off
echo Select which test to run:
echo 1. Test Original Interactive Panel
echo 2. Test Fixed Interactive Panel
echo 3. Test Browse Files Button Only
echo.
choice /c 123 /m "Enter your choice"

if errorlevel 3 goto test3
if errorlevel 2 goto test2
if errorlevel 1 goto test1

:test1
echo Opening Test Original Interactive Panel...
start "" "test-original-interactive-panel.html"
goto end

:test2
echo Opening Dashboard with Fixed Interactive Panel...
start "" "dashboard.html"
goto end

:test3
echo Opening Test Browse Files Button...
start "" "test-browse-files.html"
goto end

:end
echo Test started.