import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { createRef } from "@motion-canvas/core/lib/utils";
import { Title } from "../components/title";
import { waitFor } from "@motion-canvas/core/lib/flow";


export default makeScene2D(function* (view) {
    const intro = createRef<Title>();

    view.add(
        <>
            <Title ref={intro} title={"Title"} subtitle={"Subtitle"} />
        </>
    );

    // Play Intro
    yield* intro().fadeIn();
    yield* waitFor(7.1);
    yield* intro().fadeOut();
});
