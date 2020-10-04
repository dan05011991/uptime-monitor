export const convertHeaders = (input) => {
    if(!input || input.length === 0 || Object.keys(input).length === 0) {
        return [];
    }
    let headers = input
      .filter((item) => {
        return !item.startsWith('_');
      })
      .map((item) => {
        return {
            headerName: item.replace('_', ' '),
            field: item,
            sortable: true,
            filter: true
        };
    });

    // Add checkbox as the first column
    headers.unshift({
      headerName: "",
      field: '',
      sortable: false,
      filter: false,
      width:80
    });

    return headers;
}