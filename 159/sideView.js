AFRAME.registerComponent("side",{
    
    init:function(){
        this.createPlace()
    },
    tick:function(){
        const placesContainer=document.querySelector("#places-container")
        const {state}= placesContainer.getAttribute("tour")

        if (state==="view"||state==="change-view"){
            this.el.setAttribute("visible",true)

        }
        else{
            this.el.setAttribute("visible",false)
        }
    },

    createPlace:function(){
        const sideView=document.querySelector("#sideview-container")

        let previousXpos=-150 
        let previousYpos=30

        for (var i=1;i<=4;i++){
            const position={
                x:(previousXpos+=50),
                y:(previousYpos+=2),
                z:-40
            }
            const entityEl=this.createplaceThumbnail(position,i)
            sideView.appendChild(entityEl)
        }
    },

    createplaceThumbnail:function(position,id){
        const entityEl=document.createElement("a-entity")
        entityEl.setAttribute("visisble",true)
        entityEl.setAttribute("id",`place-${id}`)
        entityEl.setAttribute("geometry",{primitive:"circle",radius:2.5})
        entityEl.setAttribute("material",{src:"./elephant.png",opacity:0.9})
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("cursor-listener",{})
        
        return entityEl
    }
})