class Bob {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 40;
    this.body = Bodies.circle(x, y, this.radius, {
      isStatic: true,
      restitution: 0.3,
      friction: 1.5,
      density: 1.2,
    });

    World.add(world, this.body);
  }

  display() {
    const pos = this.body.position;
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius, this.radius);
  }
}
