const example = (state = [], action) => {
    switch (action.type) {
        case 'TEST_CASE':
            return [
                ...state,
            ];
        default:
            return [
                ...state,
            ];
    }
};

export default example;
