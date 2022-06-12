import React from "react";

import { Header, Posts, Form } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-main">
        <Header />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <Posts />
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
