import React from 'react';

export const iconData = {
  id: "FileKey",
  name: "FileKey",
  category: "F",
  nodes: [["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M4 12v6"}],["path",{"d":"M4 14h2"}],["path",{"d":"M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4"}],["circle",{"cx":"4","cy":"20","r":"2"}]]
};

export const FileKey = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M4 12v6" />
      <path d="M4 14h2" />
      <path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" />
      <circle cx="4" cy="20" r="2" />
      {children}
    </svg>
  );
});

export default FileKey;
