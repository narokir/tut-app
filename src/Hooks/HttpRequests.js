import { useEffect, useState } from 'react';
import axios from 'axios'; //Promise based HTTP client for the browser and node.js https://github.com/axios/axios

//Create custom Hook
function useAxiosGet(url) {
  // Call useState hook and declare variable 'count'. Passing 3 initial state arguments as object
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setRequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setRequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}

export default useAxiosGet; //export the hook
