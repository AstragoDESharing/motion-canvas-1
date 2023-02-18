import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { Circle, Layout } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { all, waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components/Text";
import { chain } from "@motion-canvas/core/lib/flow/chain";
import { Node } from "@motion-canvas/2d/lib/components/Node";

export default makeScene2D(function* (view) {
  // Big Circle
  const myCircle = createRef<Circle>();
  const myLayout = createRef<Layout>();
  const myText = createRef<Text>();

  view.add(
    <>
      <Node position={[0, -20]}>
        <Layout ref={myLayout} x={-500}>
          <Circle ref={myCircle} width={250} height={250} fill="#ff0000" />
          <Text ref={myText} y={180} fill={"white"} fontFamily={"Roboto"} fontWeight={400}>Circle</Text>
        </Layout>
      </Node>
    </>
  );

  // === ANIMATION ===

  // Move LR and change color
  yield* all(
    myLayout().position.x(500, 1.8).to(0, 1.2),
    myCircle().fill("#00ff00", 1).to("#0000ff", 1).to("#ff0000", 1)
  );

  yield* waitUntil("Get Fat");

  // Scale Circle
  yield* chain(
    all(
      myText().position.y(180 + 250 / 2, 0.4),
      myCircle().scale(2, 0.4),
    ),
    myText().opacity(0, 0.5),
    myText().text("Fat Circle", 0),
    myText().opacity(1, 0.5),
  );

  yield* waitFor(1);
});