import React from 'react';

import { Wrapper, Image } from './Background.styles';

export const Background = () => {
    return (
        <Wrapper>
            <div style={{ margin: '0' }}>
                <Image
                    top={2}
                    bottom={'px'}
                    left={'10%'}
                    width={'80%'}
                    src="/main/conversation.svg"
                    alt="conversation"
                />
            </div>
            <Image
                top={58.5}
                bottom={'0%'}
                left={'72%'}
                src="/main/Teresa.svg"
                alt="Image"
                width={'19%'}
            />

            <Image
                top={-45}
                bottom={'0%'}
                left={'4%'}
                src="/main/Group2.png"
                alt="Group"
                width={'90%'}
            />
            <Image
                top={-40}
                bottom={'0%'}
                left={'10%'}
                src="/main/Ellipse3643.svg"
                alt="Image"
                width={'70%'}
            />
            <Image top={5} left={'60%'} src="/main/Ellipse3643.svg" alt="Image" width={'30%'} />
            <Image top={10} left={'40%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Image top={5} left={'20%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Image top={50} left={'57%'} src="/main/Einstein.svg" alt="Image" width={'21%'} />
            <Image top={22} left={'36%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Image top={62} left={'7%'} src="/main/Musk.svg" alt="Image" width={'21%'} />
            <Image top={47} left={'20%'} src="/main/Jobs.svg" alt="Image" width={'23%'} />
            <Image top={21} left={'22%'} src="/main/Ellipse3643.svg" alt="Image" width={'43%'} />
            <Image top={23} left={'33%'} src="/main/King.svg" alt="Image" width={'33%'} />
            <Image top={12} left={'32%'} src="/main/Ellipse3644.svg" alt="Image" width={'43%'} />
            <Image top={47.5} left={'32'} src="/main/Gradient.png" alt="Image" width={'100%'} />
        </Wrapper>
    );
};
