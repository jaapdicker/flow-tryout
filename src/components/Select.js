/* @flow */
import React from 'react';

import styled from 'styled-components';

type Props = {
    defaultValue: string,
    values: {[name: string]: string},
    firstAsTitle: boolean,
};
type State = {

};

const Container = styled.div`
    background: #c9e6af;
    width: 220px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const InnerSelect = styled.select`
    border: 0;
    border-radius: 0;
    padding: 12px 16px;
    height: 50px;
    width: 200px;
    background: transparent;
    outline: 0;
    font-family: Futura;
    font-style: italic;
    font-size: 24px;
`;

const Select = (props: Props) => {
    const {
        firstAsTitle,
        values,
    } = props;

    return (
        <Container>
            <InnerSelect
                defaultValue={props.defaultValue}
                {...props}
            >
                {
                    Object.keys(values).map((key, i) => (
                        <option
                            value={key}
                            key={key}
                            style={{
                                display: firstAsTitle && i === 0 ? 'none' : 'block',
                            }}
                        >
                            { values[key] }
                        </option>
                    ))
                }
            </InnerSelect>
        </Container>
    );
}

Select.defaultProps = {
    firstAsTitle: false,
};

export default Select;
