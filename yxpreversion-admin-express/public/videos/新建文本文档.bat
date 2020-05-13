@echo off
set a=0
setlocal EnableDelayedExpansion
for %%n in (*.mp4) do (
set /A a+=1
ren "%%n" "video_!a!.mp4"
)