class magmaPlataform {
    plataform = null

    constructor(scene, position, rotation,  h, w, d) {
        var plataformMat = new BABYLON.StandardMaterial("plataform",scene);
        plataformMat.ambientTexture = new BABYLON.Texture("/assets/images/magmatexture.jpg", scene); 

        this.plataform = BABYLON.MeshBuilder.CreateBox("box", {height: h, width: w, depth: d});
        this.plataform.material = plataformMat;
        this.plataform.position = position;
        this.plataform.rotation = rotation;


        /*--impostor--*/
        this.plataform.physicsImpostor = new BABYLON.PhysicsImpostor(this.plataform, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0, restitution:1}, scene);
    
        //this.plataform.updatePhysicsBodyPosition();
    }

    getPlataform() {
       return this.plataform;
    }

    animatePlat(position, animPos, animType, initPos,finalPos) {
        var wheelPivotParent = new BABYLON.TransformNode("wheelPivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("marbleTowerWheelRot", wheelPivotParent, animType, 20, 60, initPos, finalPos, 1)
    }

    animateSlideL(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, -1, 5, 1)
    }

    animateSlideR(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, 5, -1, 1)
    }

    animateSlideU(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        this.goUp(wheelPivotParent,axis);
    }

    animateSlideU2(position, animPos, axis) {
        var wheelPivotParent = new BABYLON.TransformNode("PivotParent");
        wheelPivotParent.position = position;
        this.plataform.setParent(wheelPivotParent);
        wheelPivotParent.position = animPos;
        this.goUp(wheelPivotParent,axis);
    }

    async goUp(wheelPivotParent,axis) {
        await new Promise((resolve) => {
            setTimeout(resolve,3000);
        });
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, 0, 2.5, 0);
        this.goDown(wheelPivotParent,axis);
    }

    async goDown(wheelPivotParent,axis) {
        await new Promise((resolve) => {
            setTimeout(resolve,3000);
        });
        BABYLON.Animation.CreateAndStartAnimation("sliding", wheelPivotParent, "position."+axis, 20, 60, 2.5, 0, 1);
        this.goUp(wheelPivotParent,axis);
    }

}