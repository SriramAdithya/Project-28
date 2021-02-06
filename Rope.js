class Rope {
  constructor(bodyA, bodyB, offsetX, offsetY) {
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    var options = {
      bodyA: bodyA,
      bodyB: bodyB,
      stiffness: 0.04,
      length: 12,
      pointB: { x: this.offsetX, y: this.offsetY },
    };
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }

  display() {
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    
    strokeWeight(2);

    let Anchor1X = pointA.x;
    let Anchor1Y = pointA.y;

    let Anchor2X = pointB.x + this.offsetX;
    // console.log(this.offsetX)
    let Anchor2Y = pointB.y;
    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    // line(pointA.x,pointA.y,pointB.x,pointB.y)
  }
}
