import { get, isEmpty } from 'lodash';
import { useLazyQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { formatFieldsForQuery } from '../../../shared/utils';
import { SEARCH_BY_KEYWORD } from '../../../graphql/queries';
import { setVideos } from '../../../redux/actions';

const useSearch = () => {
  const dispatch = useDispatch();
  const [searchVideos, { data }] = useLazyQuery(SEARCH_BY_KEYWORD);

  const search = (filters) => {
    console.log(filters);
    searchVideos(
      {
        variables: {
          filters: formatFieldsForQuery(filters)
        },
      }
    );
  };

  const videos = get(data, 'searchByKeyword', []);
  if (!isEmpty(videos)) dispatch(setVideos(videos));

  return {
    search
  };
};

export default useSearch;
