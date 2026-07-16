@echo off
cd /d "%~dp0"
"C:\Program Files\nodejs\node.exe" node_modules\next\dist\bin\next dev -p 5173 > server-5173.log 2> server-5173.err.log
