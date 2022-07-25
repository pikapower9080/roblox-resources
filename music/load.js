const lists = document.getElementsByClassName("list")

function copy(text) {
    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(text)
        alert("Copied!")
    } else {
        console.warn("Browser does not support clipboard API, using textarea method.")
        let textarea = document.createElement("textarea")
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand("copy")
        textarea.remove()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.debug("Loaded")
    for (i in lists) {
        const list = lists[i]
        if (typeof list != "object") { continue }
        const elements = list.getElementsByTagName("div")
        for (a in elements) {
            const element = elements[a]
            
            if (typeof element != "object") { continue }
            const previewLoad = element.getElementsByClassName("previewLoad")[0]
            const copyLink = element.getElementsByClassName("copy")[0]
            previewLoad.addEventListener("click", () => {
                if (previewLoad.style.display == "none") { return }
                previewLoad.style.display = "none"
                const audioPreview = document.createElement("audio")
                audioPreview.src = `https://api.hyra.io/audio/${element.id}`
                audioPreview.classList.add("preview")
                audioPreview.controls = true
                audioPreview.autoplay = true
                audioPreview.setAttribute("controlsList", "nodownload")
                try {
                    audioPreview.addEventListener("play", () => {
                        const audioElements = document.getElementsByTagName("audio")
                        for (c in audioElements) {
                            if (audioElements[c] != audioPreview) {
                                audioElements[c].pause() // Pause other previews when you play one of them
                            }
                        }
                    })
                } catch(e) {}
                element.insertBefore(audioPreview, copyLink)
            })
            copyLink.addEventListener("click", () => {
                let copyAssetUrl = document.getElementById("copyAssetUrl").checked
                copy(copyAssetUrl == true ? `rbxassetid://${element.id}` : element.id)
                copyLink.innerHTML = "Copied!"
                setTimeout(() => {
                    copyLink.innerHTML = "Copy ID"
                }, 2000);
            })
        }
    }
})