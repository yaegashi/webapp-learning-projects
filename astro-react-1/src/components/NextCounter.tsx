import React from 'react';
import { Button, Card, CardBody, CardHeader, Chip, Divider } from '@nextui-org/react';

type NextCounterProps = {
    children?: React.ReactNode;
    initialCount: number;
};

const NextCounter: React.FC<NextCounterProps> = ({ children, initialCount }) => {
    const [count, setCount] = React.useState(initialCount);
    const add = () => setCount((i) => i + 1);
    const subtract = () => setCount((i) => i - 1);

    return (
        <Card className="mx-auto max-w-[480px]">
            <CardHeader>
                {children}
            </CardHeader>
            <Divider />
            <CardBody>
                <div className="mx-auto flex gap-4 items-center">
                    <Button color="primary" onClick={subtract}>-</Button>
                    <Chip>{count}</Chip>
                    <Button color="primary" onClick={add}>+</Button>
                </div>
            </CardBody>
        </Card>
    );
};

export default NextCounter;
