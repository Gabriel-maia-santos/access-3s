import React from 'react';

import { Button, Flex, Segmented } from 'antd';

const justifyOptions = [
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];


export const Home = () => {

        const [justify, setJustify] = React.useState(justifyOptions[3]);
        const [alignItems, setAlignItems] = React.useState(alignOptions[1]);
    return (
            <body>
                <Flex justify={justify} align={alignItems}>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
                    <Button type="primary">Primary</Button>
            </Flex>
        </body>

        );
}