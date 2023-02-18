import { Node } from '@motion-canvas/2d/lib/components';
import { NodeProps } from '@motion-canvas/2d/lib/components';
import { Layout } from "@motion-canvas/2d/lib/components";
import { createRef } from "@motion-canvas/core/lib/utils";
import { all } from "@motion-canvas/core/lib/flow";
import { Text } from "@motion-canvas/2d/lib/components/Text";
import { signal } from '@motion-canvas/2d/lib/decorators';

export interface TitleProps extends NodeProps {
    title: string;
    subtitle: string;
}

export class Title extends Node {

    @signal()
    public declare title: string;

    @signal()
    public declare subtitle: string;


    private titleRef = createRef<Text>();

    private subtitleRef = createRef<Text>();

    public constructor(props?: TitleProps) {

        super({
            ...props,
        });

        this.add(
            <>
                <Layout width={1920} height={1080}>
                    <Text ref={this.titleRef} opacity={0} fill={"white"} fontFamily={"Roboto"} fontWeight={500} fontSize={100} lineHeight={100 * 1.2}>{this.title}</Text>
                    <Text ref={this.subtitleRef} opacity={0} fill={"white"} fontFamily={"Roboto"} fontWeight={300} fontSize={50} lineHeight={100 * 1.2}>{this.subtitle}</Text>
                </Layout>
            </>
        );
    }

    public *fadeIn(duration: number = 2) {
        console.log(this.title, this.subtitle);
        yield* all(
            this.titleRef().opacity(1, duration),
            this.subtitleRef().opacity(1, duration),

            this.titleRef().position.y(-80, duration / 2),
            this.subtitleRef().position.y(80, duration / 2),
        );
    }

    public *fadeOut(duration: number = 1) {
        console.log(this.title, this.subtitle);
        yield* all(
            this.titleRef().opacity(0, duration / 2),
            this.subtitleRef().opacity(0, duration / 2),

            this.titleRef().position.y(0, duration),
            this.subtitleRef().position.y(0, duration),
        );
    }
}