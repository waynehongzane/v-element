// Import your component
import React from 'react';
import Button, { ButtonSize,ButtonType } from './button';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

export default {
    title: 'Button',
    component: Button,
    decorators: [withInfo],
    parameters: {
        info: {
            inline: true
        }
    }
};

export const DefaultButton = () => <Button onClick={action('clicked')}>default button</Button>
DefaultButton.storyName = 'Button'

export const ButtonWithSize = () => (
    <>
        <Button size='lg'>large button</Button>
        <Button size='sm'>small button</Button>
    </>
)
ButtonWithSize.storyName = '不同尺寸的 Button'

export const ButtonWithType = () => (
    <>
        <Button btnType='primary'>primary button</Button>
        <Button btnType='danger'>danger button</Button>
        <Button btnType='link'>link button</Button>
    </>
)
ButtonWithType.storyName = '不同类型的 Button'
