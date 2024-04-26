const loc    = window.document.location
const socket = io.connect(loc.origin)

const filterTitleArray = [".mp4",
                    "_1080p",
                    "9convert.com - ",
                    "_v720P",
                    "【",
                    "】",
                    "_480p",
                    "_360p",
                    "9convert.com -",
                    "{",
                    "}",
                    "[",
                    "]",
                    "-",
                    "(",
                    ")",
                    ".webm",
                    "y2mate.com ",
                    "FHR",
                    "yt1s.com "]

const replaceTitleArray = [
    ["  ","_"],
    [" " ," "],
]