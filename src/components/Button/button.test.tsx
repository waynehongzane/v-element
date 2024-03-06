import React from "react";
import { getByText, render } from '@testing-library/react'
import Button, { ButtonSize, ButtonType } from './button'

describe('test Button component',() => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
    })
    it('sould render the correct component based on different props', () => {
        const wrapper = render(<Button btnType='primary' size='lg'>primary</Button>)
        const element = wrapper.getByText('primary')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-primary btn-lg')
    })
    it('sould render a link when btnType equals link and href is provided', () => {
        const wrapper = render(<Button btnType='link' href="www.buidu.com">link</Button>)
        const element = wrapper.getByText('link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('sould render disabled button when disabled set to true', () => {
        
    })
})