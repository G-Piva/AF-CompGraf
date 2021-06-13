class Ball {
   sphere = null;

    constructor(scene, height) {
       /*--Área da bola--*/
        var sphereMat = new BABYLON.StandardMaterial("ball",scene);
        sphereMat.ambientTexture = new BABYLON.Texture("/assets/images/ballTexture.jpg", scene); // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 0, 0.80, scene);
        this.sphere.position.y = height;
        this.sphere.position.x = -2;
        this.sphere.material = sphereMat;

        /*--impostor--*/
        this.sphere.physicsImpostor = new BABYLON.PhysicsImpostor(this.sphere, BABYLON.PhysicsImpostor.SphereImpostor, {mass: 1, restitution: 0.8}, scene);   
    }

    getBall() {
        return this.sphere;
    }

    removeBall(count) {
        this.sphere.dispose();
        return count-1;
    }
}