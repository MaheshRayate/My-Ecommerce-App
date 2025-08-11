// // src/components/FilterWatcher.jsx
// import { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { setFilter } from "../../Features/ProductFilter/productFilterSlice";

// export default function FilterWatcher() {
//   const filters = useSelector((state) => state.productFilter);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const isFirstLoad = useRef(true);

//   // Parse URL → Redux (on first mount)

//   useEffect(() => {
//     console.log("1st useEffect");
//     if (isFirstLoad.current) {
//       const params = new URLSearchParams(location.search);

//       const parsedFilters = {};

//       for (const [key, value] of params.entries()) {
//         if (!parsedFilters[key]) parsedFilters[key] = [];
//         parsedFilters[key].push(value);
//       }

//       if (Object.keys(parsedFilters).length > 0) {
//         dispatch(setFilter(parsedFilters));
//       }

//       // ✅ Mark first load as done before second effect runs
//       isFirstLoad.current = false;
//     }
//   }, [location.search, dispatch]);

//   // Redux → URL
//   useEffect(() => {
//     if (isFirstLoad.current) return;

//     console.log("2nd useEffect");

//     const params = new URLSearchParams();

//     Object.entries(filters.value).forEach(([key, values]) => {
//       if (Array.isArray(values) && values.length > 0) {
//         values.forEach((v) => params.append(key, v));
//       }
//     });
//     console.log(Object.entries(filters));

//     console.log(params);

//     navigate(
//       {
//         pathname: location.pathname,
//         search: params.toString(),
//       },
//       { replace: true }
//     );
//   }, [filters, navigate, location.pathname]);

//   return null;
// }

// src/components/FilterWatcher.jsx
// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function FilterWatcher() {
//   const filters = useSelector((state) => state.productFilter);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isFirstLoad = useRef(true);

//   // Redux → URL
//   useEffect(() => {
//     if (isFirstLoad.current) {
//       isFirstLoad.current = false;
//       return; // ✅ Skip first run so no persistence on refresh
//     }

//     const params = new URLSearchParams();

//     Object.entries(filters.value).forEach(([key, values]) => {
//       if (Array.isArray(values) && values.length > 0) {
//         values.forEach((v) => params.append(key, v));
//       }
//     });

//     navigate(
//       {
//         pathname: location.pathname,
//         search: params.toString(),
//       },
//       { replace: true }
//     );
//   }, [filters, navigate, location.pathname]);

//   return null;
// }

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  clearAllFilters,
  setFilter,
} from "../../Features/ProductFilter/productFilterSlice";

export default function FilterWatcher() {
  const filters = useSelector((state) => state.productFilter);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isFirstLoad = useRef(true);

  // Load filters from URL only if no localStorage filters exist

  useEffect(() => {
    if (
      !(
        location.pathname.startsWith("/women") ||
        location.pathname.startsWith("/men")
      )
    ) {
      dispatch(clearAllFilters());
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    if (isFirstLoad.current) {
      const saved = localStorage.getItem("filters");
      if (!saved) {
        const params = new URLSearchParams(location.search);
        const parsedFilters = {};

        for (const [key, value] of params.entries()) {
          if (!parsedFilters[key]) parsedFilters[key] = [];
          parsedFilters[key].push(value);
        }

        if (Object.keys(parsedFilters).length > 0) {
          dispatch(setFilter(parsedFilters));
        }
      }
      isFirstLoad.current = false;
    }
  }, [location.search, dispatch]);

  // Redux → URL + localStorage
  useEffect(() => {
    if (isFirstLoad.current) return;

    const params = new URLSearchParams();
    Object.entries(filters.value).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((v) => params.append(key, v));
      }
    });

    localStorage.setItem("filters", JSON.stringify(filters.value));

    navigate(
      {
        pathname: location.pathname,
        search: params.toString(),
      },
      { replace: true }
    );
  }, [filters, navigate, location.pathname]);

  return null;
}
