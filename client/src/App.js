import React, { useState, useEffect } from "react";
import { Header, Posts, Form } from "./components";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className="min-h-screen gradient-bg-main">
      <Header />
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <div className="col-span-1 lg:col-span-2">
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
};

export default App;
