import { Latex } from '@motion-canvas/2d/lib/components';
import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { waitFor, waitUntil } from '@motion-canvas/core/lib/flow';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
    const tex = createRef<Latex>();
    view.add(
        <Latex
            ref={tex}
            tex="{\color{white} x = - \frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}}"
            y={0}
            width={100} // height and width can calculate based on each other
            scale={8}
        />,
    );

    yield* waitUntil("Rotate");
    yield* tex().rotation(360, 2);
    yield* waitUntil("Rotate back");
    yield* tex().rotation(0, 2);
    yield* waitUntil("Continue");
});