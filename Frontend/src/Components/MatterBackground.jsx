import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
import MatterWrap from "matter-wrap";

Matter.use(MatterAttractors);
Matter.use(MatterWrap);

const MatterBackground = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { Engine, Events, Runner, Render, World, Body, Common, Bodies } = Matter;

    const dimensions = { width: window.innerWidth, height: window.innerHeight };

    // Engine
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // Renderer
    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
        showVelocity: false,
      },
    });

    const runner = Runner.create();
    const world = engine.world;
    world.gravity.scale = 0;

    // Central attractor
    const attractiveBody = Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        isStatic: true,
        render: { fillStyle: "#1e1e2f", strokeStyle: "#1e1e2f", lineWidth: 0 },
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );
    World.add(world, attractiveBody);

    // Add multiple bodies
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, dimensions.width);
      const y = Common.random(0, dimensions.height);
      const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polySides = Common.random(3, 6);

      const polygon = Bodies.polygon(x, y, polySides, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: { fillStyle: "#2a2a3a", strokeStyle: "#1a1a2a", lineWidth: 2 },
      });
      World.add(world, polygon);

      let r = Common.random(0, 1);
      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: { fillStyle: r > 0.3 ? "#3b3b5a" : "#4a4a6a", strokeStyle: "#1a1a2a", lineWidth: 2 },
      });
      World.add(world, circle1);

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: { fillStyle: r > 0.3 ? "#505080" : "#383860", strokeStyle: "#222244", lineWidth: 4 },
      });
      World.add(world, circle2);

      const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: { fillStyle: "#1a1a2f", strokeStyle: "#222244", lineWidth: 3 },
      });
      World.add(world, circle3);
    }

    // Mouse tracking
    let mousePosition = { x: dimensions.width / 2, y: dimensions.height / 2 };
    const handleMouseMove = (e) => { mousePosition = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", handleMouseMove);

    Events.on(engine, "afterUpdate", () => {
      Body.translate(attractiveBody, {
        x: (mousePosition.x - attractiveBody.position.x) * 0.12,
        y: (mousePosition.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Run engine
    Runner.run(runner, engine);
    Render.run(render);

    // Handle resize
    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      if (render.canvas) render.canvas.remove();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="absolute inset-0 -z-20" // behind Hero section
      style={{ pointerEvents: "none" }}
    />
  );
};

export default MatterBackground;
