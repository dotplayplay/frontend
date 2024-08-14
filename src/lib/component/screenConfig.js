
export class ScreenScript{
    constructor(){
        this.theme = "darken"
        this.sideBar = "sidebar-fold"
        this.openCLass = "side-unfold"
        this.closeClass = "side-fold"
        this.chatClass = ""
        this.isSideClass  = ""
        this.chatIsSideOpen  = false
        this.sideHasExpand = 0
        this.sideFold = 62
        this.sideUnFold = 226
        this.screen = 0
        this.newScreen = 0
        this.chatBoxExpand = 0
        this.smallLagos = "https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848286/dpp-favicon-logo_j53rwc.jpg"
        this.largeLogos ="https://res.cloudinary.com/dxwhz3r81/image/upload/v1697848521/dpp-logowhite_lbifm7.png"
    }
    screenConfig(sreen){
        if(sreen  > 1600){
            this.updateChatClass()
        }
        else if(sreen  > 1220){
            this.sideHasExpand = this.sideUnFold
            this.isSideClass = this.openCLass
        }
        else if(sreen  > 621){
            this.sideHasExpand = this.sideFold
            this.isSideClass = this.closeClass
        }
        else{
            this.sideHasExpand = ""
            this.isSideClass = ""
            this.chatClass = ""
        }
        document.body.className = `${this.theme} ${this.isSideClass} ` + this.chatClass
        this.screen = sreen
    }

    screenResize(ens){
        this.screenConfig(ens)
        let el = document.documentElement
        el.style.fontSize = `${this.screen > 621 ? 16 : this.screen > 560 ?  23 : this.screen > 500 ? 21.34 : this.screen > 440 ? 17.54 : this.screen > 300 ?  13.5 : 11.5}px`;
    }

    sizeConfiq(ens){
        if(ens > 1220){
           this.isSideClass = this.openCLass
        }
        document.body.className = `${this.theme} ${ens > 1220 ? this.openCLass : ens > 621 ? this.closeClass : ""} ` + this.chatClass
        this.screenConfig(ens)
        let el = document.documentElement
        el.style.fontSize = `${this.screen > 621 ? 16 : this.screen > 560 ?  23 : this.screen > 500 ? 21.34 : this.screen > 440 ? 17.54 : this.screen >  300 ?  13.5 : 11.5}px`;
    }
    updateChatClass(click){
        if(this.chatClass && this.screen < 1600){
            this.chatClass = ""
            this.chatBoxExpand = 0
        }
        else if(this.chatClass && click){
            this.chatClass = ""
            this.chatBoxExpand = 0
        }
        else{
            this.chatClass = "has-chat"
            this.chatBoxExpand = 360
        }
        console.log(this.isSideClass)
        document.body.className = this.theme + ` ${this.isSideClass} ` + this.chatClass
    }
}


