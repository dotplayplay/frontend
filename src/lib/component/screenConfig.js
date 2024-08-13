
export class ScreenScript{
    constructor(){
        this.theme = "darken"
        this.sideBar = "sidebar-fold"
        this.openCLass = "side-unfold"
        this.closeClass = "side-fold"
        this.chatClass = ""
        this.isSideOpen  = false
        this.chatIsSideOpen  = false
        this.sideHasExpand = 0
        this.sideFold = 62
        this.sideUnFold = 226
        this.screen = 0
        this.newScreen = 0
        this.chatBoxExpand = 0
    }
    screenConfig(sreen){
        if(sreen  > 1600){
            this.updateChatClass()
        }
        else if(sreen  > 1220){
            this.sideHasExpand = this.sideUnFold
            this.isSideOpen = true
        }
        else{
            this.sideHasExpand = this.sideFold
            this.isSideOpen = false
        }
        document.body.className = `${this.theme} ${this.isSideOpen ? this.openCLass : this.closeClass} ` + this.chatClass
        this.screen = sreen
    }

    screenResize(ens){
        this.screenConfig(ens)
        let el = document.documentElement
        el.style.fontSize = `${this.screen > 650 ? 16 : this.screen > 560 ?  23 : this.screen > 500 ? 21.34 : this.screen > 440 ? 17.54 : this.screen > 300 ?  13.5 : 11.5}px`;
    }

    sizeConfiq(ens){
        if(ens > 1220){
           this.isSideOpen = true
        }
        document.body.className = `${this.theme} ${ens > 1220 ? this.openCLass : this.closeClass} ` + this.chatClass
        this.screenConfig(ens)
        let el = document.documentElement
        el.style.fontSize = `${this.screen > 650 ? 16 : this.screen > 560 ?  23 : this.screen > 500 ? 21.34 : this.screen > 440 ? 17.54 : this.screen >  300 ?  13.5 : 11.5}px`;
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
        document.body.className = this.theme + ` ${this.isSideOpen ? this.openCLass : this.closeClass} ` + this.chatClass
    }
}


