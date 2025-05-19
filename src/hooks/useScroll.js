import { useEffect, useState } from "react";
import useDebouncedFn from "./useDebouncedFn";

const useScroll = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useDebouncedFn(() => {
    window.scrollY === 0 ? setIsScroll(true) : setIsScroll(false);
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isScroll;
};

export default useScroll;

// useEffect(() => {
//   const handleScroll = () => {
//     const scrollHeight = document.documentElement.scrollHeight; // 문서 전체 높이
//     const scrollTop = window.scrollY; // 현재 스크롤 위치 (위쪽부터 얼마나 내렸는지)
//     const clientHeight = window.innerHeight; // 화면 높이 (보이는 영역)

//     if (
//       scrollHeight - (scrollTop + clientHeight) <= 10 &&
//       !loading &&
//       hasNextPage
//     ) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [loading, hasNextPage]);

// const time = useRef(new Date());
//   useEffect(() => {
//     const newTime = new Date();

//     const throttleTimer = setTimeout(() => {
//       const updatedData = data.filter((el) => el.name.match(reg));
//       setFilteredData(updatedData);

//       time.current = new Date();
//     }, 1000 - (newTime - time.current));

//     return () => clearTimeout(throttleTimer);
//   }, [param]);

// const throttle = (func, delay) => {
//   let lastTime = 0;
//   return (...args) => {
//     const now = Date.now();
//     if (now - lastTime >= delay) {
//       func(...args);
//       lastTime = now;
//     }
//   };
// };

// const throttledSearch = useMemo(
//   () =>
//     throttle((query) => {
//       console.log('스로틀 검색 쿼리:', query);
//     }, 300),
//   []
// );

// const handleChangeThrottled = useCallback(
//   (event) => {
//     setQuery(event.target.value);
//     throttledSearch(event.target.value);
//   },
//   [throttledSearch]
// );
