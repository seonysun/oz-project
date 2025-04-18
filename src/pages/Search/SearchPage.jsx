import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('input');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const debounceFetch = useMemo(
    () =>
      debounce((value) => {
        setDebouncedQuery(value);
      }, 300),
    [],
  );

  useEffect(() => {
    if (!query.trim()) return;

    debounceFetch(query);
  }, [query, debounceFetch]);

  return (
    <div className="my-4 space-y-4 px-[10%]">
      <span>검색어 : {debouncedQuery}</span>
    </div>
  );
}

export default SearchPage;
