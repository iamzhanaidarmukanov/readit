import React, { useEffect } from "react";
import { Header, Posts, Form } from "./components";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="min-h-screen gradient-bg-main">
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Posts />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default App;
