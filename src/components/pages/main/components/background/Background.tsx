import React from 'react';

import { Wrapper, Img } from './Background.styles';

export const Background = () => {
    return (
        <Wrapper>
            <div style={{ margin: '0' }}>
                <Img
                    top={2}
                    bottom={'px'}
                    left={'10%'}
                    width={'80%'}
                    src="/main/conversation.webp"
                    alt="conversation"
                />
            </div>
            <Img
                top={58.5}
                bottom={'0%'}
                left={'72%'}
                src="/main/Teresa-compressed.webp"
                alt="Image"
                placeholderSrc="/main/Teresa-compressed.webp"
                width={'19%'}
            />

            <Img
                top={-45}
                bottom={'0%'}
                left={'4%'}
                src="/main/Group2.webp"
                alt="Group"
                width={'90%'}
            />
            <Img
                top={-40}
                bottom={'0%'}
                left={'10%'}
                src="/main/Ellipse3643.svg"
                alt="Image"
                width={'70%'}
            />
            <Img top={5} left={'60%'} src="/main/Ellipse3643.svg" alt="Image" width={'30%'} />
            <Img top={10} left={'40%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Img top={5} left={'20%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Img
                top={50}
                left={'57%'}
                src="/main/Einstein-compressed.webp"
                alt="Image"
                placeholderSrc="/main/Einstein-compressed.webp"
                width={'21%'}
            />
            <Img top={22} left={'36%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Img
                top={62}
                left={'7%'}
                src="/main/Musk-compressed.webp"
                alt="Image"
                placeholderSrc="/main/Musk-compressed.webp"
                width={'21%'}
            />
            <Img
                top={47}
                left={'20%'}
                src="/main/Jobs-compressed.webp"
                alt="Image"
                placeholderSrc="/main/Jobs-compressed.webp"
                width={'23%'}
            />
            <Img top={21} left={'22%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Img
                top={23}
                left={'33%'}
                src="/main/King-compressed.webp"
                placeholderSrc="/main/King-compressed.webp"
                alt="Image"
                width={'33%'}
            />
            <Img top={12} left={'32%'} src="/main/Ellipse3644.svg" alt="Image" width={'43%'} />
            <Img top={47.5} left={'32'} src="/main/Gradient.png" alt="Image" width={'100%'} />
        </Wrapper>
    );
};
