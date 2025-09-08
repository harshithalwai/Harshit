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

    const {
      Engine,
      Render,
      Runner,
      World,
      Bodies,
      Body,
      Mouse,
      Events,
      Common,
    } = Matter;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();
    World.add(
      engine.world,
      Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(window.innerWidth / 25, window.innerHeight / 25) / 2,
        {
          isStatic: true,
          render: { fillStyle: "#000" },
          plugin: {
            attractors: [
              (bodyA, bodyB) => ({
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              }),
            ],
          },
        }
      )
    );

    // add random bodies
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let size = Common.random(10, 50);

      World.add(
        engine.world,
        Bodies.circle(x, y, size / 2, {
          mass: size / 20,
          render: { fillStyle: "#222" },
        })
      );
    }

    // mouse attractor
    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(engine.world.bodies[0], {
        x: (mouse.position.x - engine.world.bodies[0].position.x) * 0.12,
        y: (mouse.position.y - engine.world.bodies[0].position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    // cleanup on unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className="absolute inset-0 -z-10" />;
};

export default MatterBackground;
