export const replaceStateItem = (state, newItem) => {
    const newItems = state.items.map((item) => {
        return item._Id === newItem._Id ? newItem : item;
    });
    return {
        ...state,
        items: [...newItems]
    };
};