import React from 'react';

export const iconData = {
  "id": "TriboSimple",
  "name": "TriboSimple",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 15.25 L 5.40 7.07 L 12.97 3.82 L 19.57 8.75 L 18.60 16.93 L 11.03 20.18 Z"
      }
    ]
  ]
};

export const TriboSimple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 15.25 L 5.40 7.07 L 12.97 3.82 L 19.57 8.75 L 18.60 16.93 L 11.03 20.18 Z" />
      {children}
    </svg>
  );
});

export default TriboSimple;
