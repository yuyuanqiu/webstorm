@echo off
set a=0
setlocal EnableDelayedExpansion
for %%n in (*.png) do (
ren "%%n" "!a!.png"
set /A a+=1

)