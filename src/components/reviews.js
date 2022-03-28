import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { Block, Button, Content } from "react-bulma-components";
import { RichText } from "./richtext";

export function Reviews() {
    const { reviews } = useStaticQuery(graphql`
        query {
            reviews: allContentfulReview(sort: { fields: createdAt, order: DESC }, limit: 5) {
                nodes {
                    author
                    content {
                        raw
                    }
                    link
                }
            }
        }
    `);

    return (
        <CarouselProvider
            naturalSlideWidth={600}
            naturalSlideHeight={350}
            totalSlides={reviews.nodes.length}
            isPlaying={true}
            interval={10000}
            dragEnabled={false}
            infinite={true}
            isIntrinsicHeight={true}
        >
            <Block>
                <Slider>
                    {reviews.nodes.map(({ author, content }, i) => {
                        return (
                            <Slide index={i} key={i}>
                                <Content>
                                    <RichText src={content} />
                                </Content>
                                <Content textAlign="right">
                                    <p>
                                        <em>{author}</em>
                                    </p>
                                </Content>
                            </Slide>
                        );
                    })}
                </Slider>
            </Block>
            <Block>
                <Button.Group size="small">
                    {reviews.nodes.map((_, i) => {
                        return <Button renderAs={Dot} slide={i} key={i} color="success" rounded={true} />;
                    })}
                </Button.Group>
            </Block>
        </CarouselProvider>
    );
}
