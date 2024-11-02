import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import { Block, Button, Content } from "react-bulma-components";
import { Typography } from "./style";
import { Review } from "../data";
import { RichText } from "./richtext";

interface ReviewsProps {
    reviews: Review[];
}

export function Reviews(props: ReviewsProps) {
    return (
        <CarouselProvider
            naturalSlideWidth={600}
            naturalSlideHeight={350}
            totalSlides={props.reviews.length}
            isPlaying={true}
            interval={10000}
            dragEnabled={false}
            infinite={true}
            isIntrinsicHeight={true}
        >
            <Block>
                <Slider>
                    {props.reviews.map(({ author, content }, i) => {
                        return (
                            <Slide index={i} key={i}>
                                <Content>{content && <RichText src={content} />}</Content>
                                <Content textAlign="right">
                                    <Typography>
                                        <em>{author}</em>
                                    </Typography>
                                </Content>
                            </Slide>
                        );
                    })}
                </Slider>
            </Block>
            <Block>
                <Button.Group size="small">
                    {props.reviews.map((_, i) => {
                        return (
                            <Button
                                renderAs={Dot}
                                slide={i}
                                key={i}
                                color="success"
                                rounded={true}
                            />
                        );
                    })}
                </Button.Group>
            </Block>
        </CarouselProvider>
    );
}
