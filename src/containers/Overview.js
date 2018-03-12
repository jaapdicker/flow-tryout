/* @flow */
import React from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from 'actions/categories';

import type { Category } from 'types';

import {
    Container,
    Link,
    Text,
} from 'styled/Common';

type Props = {
    categories: [Category],
    dispatch: Function,
    isFetching: boolean,
};

@connect(state => ({
    categories: state.overview.categories,
    isFetching: state.overview.isFetching,
}))
class Overview extends React.Component<Props> {
    componentDidMount() {
        if (this.props.categories.length < 1) {
            fetchCategories(this.props.dispatch);
        }
    }

    render() {
        const {
            categories,
            isFetching,
        } = this.props;

        if (isFetching) {
            return (
                <Container>
                    <Text>
                        Loading
                    </Text>
                </Container>
            );
        }

        return (
            <Container>
                {
                    categories.length > 0 && categories.map(c => (
                        <Link
                            to={`/category/${c.name}`}
                            key={c.name}
                        >
                            { c.name }
                        </Link>
                    ))
                }
            </Container>
        );
    }
}

export default Overview;
