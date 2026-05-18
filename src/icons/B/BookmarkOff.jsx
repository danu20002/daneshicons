import React from 'react';

export const iconData = {
  id: "BookmarkOff",
  name: "BookmarkOff",
  category: "B",
  nodes: [["path",{"d":"M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M8.656 3H17a2 2 0 0 1 2 2v8.344"}]]
};

export const BookmarkOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H17a2 2 0 0 1 2 2v8.344" />
      {children}
    </svg>
  );
});

export default BookmarkOff;
