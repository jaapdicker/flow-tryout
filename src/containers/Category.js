import React from 'react';
import { connect } from 'react-redux';

import { fetchCategory } from 'actions/category';

import type { GenericCategory } from 'types';

import Select from 'components/Select';

import { asc, desc } from 'helpers/sort';

import {
    Container,
    Input,
    Text,
} from 'styled/Common';

type Props = {
    match: {
        params: {
            name: string,
        },
    },
    dispatch: Function,
    category: [GenericCategory],
    isFetching: boolean,
};

type State = {
    search: string,
    category: [GenericCategory],
    sort: 'asc' | 'desc',
};

@connect((state, ownProps: Props) => ({
    category: state.category.categories[ownProps.match.params.name],
    isFetching: state.category.isFetching,
}))
class Category extends React.Component<Props, State> {
    state = {
        search: '',
        category: [],
        sort: 'asc',
    };

    componentDidMount() {
        const {
            dispatch,
            match,
        } = this.props;

        fetchCategory(match.params.name, dispatch);
    }

    componentWillReceiveProps(nextProps: Props) {
        if (this.state.category.length < 1 && nextProps.category.length > 0) {
            this.setState({
                category: nextProps.category.sort((a, b) => asc(a.name, b.name)),
            });
        }
    }

    sortChange(event: Object) {
        if (event.target.value === this.state.sort) { return; }

        const sort = event.target.value;

        const sortedCats = this.state.category;
        this.setState({
            sort,
            category: sort === 'asc'
                ? sortedCats.sort((a, b) => asc(a.name, b.name))
                : sortedCats.sort((a, b) => desc(a.name, b.name)),
        });
    }

    render() {
        const {
            isFetching,
        } = this.props;

        const {
            category,
            search,
        } = this.state;

        let categoryRender = category;
        if (search !== '') {
            categoryRender = category.filter(c => c.name.toLowerCase().match(search.toLowerCase()));
        }

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
                <Select
                    onChange={event => this.sortChange(event)}
                    firstAsTitle
                    values={{
                        sort: 'Sort',
                        asc: 'Ascending',
                        desc: 'Descending',
                    }}
                />
                <Input
                    type="text"
                    onChange={e => this.setState({ search: e.target.value })}
                    value={search}
                    placeholder="Search"
                />
                {
                    categoryRender.map(c => (
                        <Text
                            key={c.name}
                            background="#333333"
                        >
                            {c.name}
                        </Text>
                    ))
                }
            </Container>
        );
    }
}

export default Category;
