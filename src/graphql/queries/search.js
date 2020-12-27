import gql from 'graphql-tag';

const SEARCH_BY_KEYWORD = gql`
query searchByKeyword($filters: [Filter] = []) {
    searchByKeyword(filters: $filters) {
        kind
        title
    }
}`;
export default SEARCH_BY_KEYWORD;
