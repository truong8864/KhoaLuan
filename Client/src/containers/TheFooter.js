import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ml-1">&copy; 2020 creative.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a
          href="https://www.uit.edu.vn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UITer
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
