const lists = document.getElementsByClassName("list")

function copy(text) {
    if ('clipboard' in navigator) {
        navigator.clipboard.writeText(text)
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
            previewLoad.addEventListener("click", async () => {
                window.open(`https://create.roblox.com/store/asset/${element.id}/`, "_blank")
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
