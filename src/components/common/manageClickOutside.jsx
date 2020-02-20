import React, { useEffect, useRef } from "react";

function useManageClickOutside(node, onClick) {
  useEffect(() => {
    document.addEventListener("click", e => handleClickOutside(e), false);
    return () => {
      document.removeEventListener("click", e => handleClickOutside(e), false);
    };
  });

  const handleClickOutside = e => {
    if (node.current && !node.current.contains(e.target)) {
      onClick();
    }
  };
}

export function ManageClickOutside({ onClick, children }) {
  const node = useRef();
  useManageClickOutside(node, onClick);

  return <div ref={node}>{children}</div>;
}
