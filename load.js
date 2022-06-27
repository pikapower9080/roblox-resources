const misc = [
    {id: "180542708", imageUrl: "https://tr.rbxcdn.com/443475df5673348d1462b7d906426916/420/420/Image/Png", title: "Roblox R"},
    {id: "65419645", imageUrl: "https://tr.rbxcdn.com/54e383e047c9faac57ba0424afaadc0a/420/420/Image/Png", title: "Dancing Banana"},
    {id: "4829164088", imageUrl: "https://tr.rbxcdn.com/5cf981eb5a06ab8933066f43968b8eb6/420/420/Image/Png", title: "Vaporwave Moon"},
    {id: "243331916", imageUrl: "https://tr.rbxcdn.com/af4e82dd31566a57bbb6d7a5f59940f3/420/420/Image/Png", title: "Music Note"},
    {id: "5508002333", imageUrl: "https://tr.rbxcdn.com/4b065accc84e3e8b8c93658fe459aa72/420/420/Image/Png", title: "X"},
    {id: "10030660883", imageUrl: "https://tr.rbxcdn.com/1d36deec81396cb4df05d16d11ba3eff/420/420/Image/Png", title: "Roblox Coin"},
]
const textures = [
    {id: "1445638972", imageUrl: "https://tr.rbxcdn.com/d080ebf6fc0acbe85feb326585803a92/420/420/Image/Png", title: "Dev Grid", solid: true},
    {id: "232395521", imageUrl: "https://tr.rbxcdn.com/707ed58558561fae345ae13d74e7afdd/420/420/Image/Png", title: "Hex Tile Pattern", solid: true},
    {id: "76193498", imageUrl: "https://tr.rbxcdn.com/fb8f4b5668d7696cdd84a66df9ec872f/420/420/Image/Png", title: "Checkers White"},
    {id: "296397676", imageUrl: "https://tr.rbxcdn.com/67f4942f9cd27b3a2b59c66751c94a15/420/420/Image/Png", title: "Roofing (5, 4)", solid: true},
    {id: "201079136", imageUrl: "https://tr.rbxcdn.com/d739c9ecaf8d22f5f43f32dda9c543e9/420/420/Image/Png", title: "Vertical Stripe Wallpaper (3, 3)", solid: true},
    {id: "321533871", imageUrl: "https://tr.rbxcdn.com/d868db73baabd4b73f841a239253c2bf/420/420/Image/Png", title: "Tiles (4, 4) [Material: Marble]", solid: true},
    {id: "319943215", imageUrl: "https://tr.rbxcdn.com/eb9c293b3ee12b4aa4d6c06c629b94f3/420/420/Image/Png", title: "Wood Planks (8, 8) [Base material: Wood, Transparency: 0.2]", solid: true},
    {id: "321821344", imageUrl: "https://tr.rbxcdn.com/82e3d51755c89682c6534cb63dd4810d/420/420/Image/Png", title: "Dirt (6, 6) [Material: Slate]", solid: true},
]
// Please help me, I had to do this manually
const spiralGif = [
    {id: "9231227426", imageUrl: "https://tr.rbxcdn.com/67ba3fe80c9748f56b8f8f568a1105d3/420/420/Image/Png", title: "Spiral Frame 1"},
    {id: "9231227484", imageUrl: "https://tr.rbxcdn.com/4e3da0d196e0bd0077dffcca5e41daa7/420/420/Image/Png", title: "Sprial Frame 2"},
    {id: "9231227553", imageUrl: "https://tr.rbxcdn.com/4708472b60a8515945094fa8e295cb86/420/420/Image/Png", title: "Spiral Frame 3"},
    {id: "9231227629", imageUrl: "https://tr.rbxcdn.com/16543f0177ab5b1d985fe516bd5fc987/420/420/Image/Png", title: "Spiral Frame 4"},
    {id: "9231227765", imageUrl: "https://tr.rbxcdn.com/aeb98b87ad875341a31f4ccb092b354a/420/420/Image/Png", title: "Spiral Frame 5"},
    {id: "9231227851", imageUrl: "https://tr.rbxcdn.com/a7e2042fc8009b36c9fd0b6662afec23/420/420/Image/Png", title: "Spiral Frame 6"},
    {id: "9231227936", imageUrl: "https://tr.rbxcdn.com/2b70cf72e6288b70e397c548c76f87be/420/420/Image/Png", title: "Spiral Frame 7"},
    {id: "9231228039", imageUrl: "https://tr.rbxcdn.com/bd064322bdcb1c658823300508c7b4f6/420/420/Image/Png", title: "Spiral Frame 8"},
    {id: "9231228112", imageUrl: "https://tr.rbxcdn.com/3c22e6846b54beb41465abfb9ed5a0b0/420/420/Image/Png", title: "Spiral Frame 9"},
    {id: "9231228204", imageUrl: "https://tr.rbxcdn.com/21098d635349bc9914abf7b6ca22fe00/420/420/Image/Png", title: "Spiral Frame 10"}
]

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
        alert("Copied!")
    }
}

function loop(data, gridElement) {
    data.forEach((image) => {
        let clone = document.createElement("div")
        clone.classList.add("cell")
        clone.appendChild(document.createElement("img"))
        clone.getElementsByTagName("img")[0].src = image.imageUrl
        clone.setAttribute("id", image.id)
        if ('title' in image) {
            // clone.setAttribute("title", image.title)
            clone.getElementsByTagName("img")[0].alt = image.title
            let tooltip = document.createElement("span")
            tooltip.classList.add("tooltip")
            tooltip.innerText = image.title
            clone.appendChild(tooltip)
        }
        if ('solid' in image && image.solid) {
            clone.getElementsByTagName("img")[0].style.backgroundColor = "white"
        }
        clone.addEventListener("click", () => {
            let copyAssetUrl = document.getElementById("copyAssetUrl").checked
            copy(copyAssetUrl == true ? `rbxassetid://${image.id}` : image.id)
        })
        document.getElementById(gridElement).appendChild(clone)
    })
}

loop(misc, "misc")
loop(textures, "textures")
loop(spiralGif, "spiralgif")