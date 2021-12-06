// mobile-menu
let flag2 = true
document.querySelector(".mobile-menu-switcher").addEventListener('click', (e) => {
    if (flag2 === true) {
        document.querySelector(".mobile-menu").classList.add('mobile-menu-show')
        flag2 = false
        document.querySelector(".header").style.cssText = " background: #1C1C1C;"
        e.target.src = './images/close.svg'
        e.target.style.cssText = "transform: rotate(360deg)"
        setTimeout(() => {
            var texts = document.querySelectorAll(".text-menu > span")
            texts.forEach((val) => {
                val.style.cssText = "-webkit-transform: translateY(0px);\n" +
                    "        -moz-transform: translateY(0px);\n" +
                    "        -ms-transform:translateY(0px) ;\n" +
                    "        -o-transform: translateY(0px);\n" +
                    "        transform: translateY(0px);"
            })
            e.target.style.cssText = ""

        }, 500)


    } else {

        var texts = document.querySelectorAll(".text-menu > span")
        texts.forEach((val) => {
            val.style.cssText = "-webkit-transform: translateY(-100px);\n" +
                "        -moz-transform: translateY(-100px);\n" +
                "        -ms-transform:translateY(-100px) ;\n" +
                "        -o-transform: translateY(-100px);\n" +
                "        transform: translateY(-100px);"
        })
        e.target.src = './images/menu_mobile.svg'
        e.target.style.cssText = "transform: rotate(360deg)"
        setTimeout(() => {
            document.querySelector(".header").style.cssText = ""
            flag2 = true
            e.target.style.cssText = ""
            document.querySelector(".mobile-menu").style.cssText = "  -webkit-transform: translateY(-113vh);\n" +
                "        -moz-transform: translateY(-113vh);\n" +
                "        -ms-transform:translateY(-113vh) ;\n" +
                "        -o-transform: translateY(-113vh);\n" +
                "        transform: translateY(-113vh);"
            setTimeout(()=>{
                document.querySelector(".mobile-menu").classList.remove('mobile-menu-show')
                document.querySelector(".mobile-menu").style.cssText = ""
            },1500)
        }, 1000)

    }
})
window.addEventListener('resize', () => {
    var texts = document.querySelectorAll(".text-menu> span")
    if (document.documentElement.clientWidth > 768) {

        texts.forEach((val) => {
            val.style.cssText = "-webkit-transform: translateY(0px);\n" +
                "        -moz-transform: translateY(0px);\n" +
                "        -ms-transform:translateY(0px) ;\n" +
                "        -o-transform: translateY(0px);\n" +
                "        transform: translateY(0px);"
        })
    } else {
        texts.forEach((val) => {
            val.style.cssText = "-webkit-transform: translateY(-100px);\n" +
                "        -moz-transform: translateY(-100px);\n" +
                "        -ms-transform:translateY(-100px) ;\n" +
                "        -o-transform: translateY(-100px);\n" +
                "        transform: translateY(-100px);"
        })

    }
})