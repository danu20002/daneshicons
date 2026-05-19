import React from 'react';

export const iconData = {
  "id": "TriboNine",
  "name": "TriboNine",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.04 2.69 L 19.58 6.52 L 20.54 15.83 L 12.96 21.31 L 4.42 17.48 L 3.46 8.17 Z"
      }
    ]
  ]
};

export const TriboNine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.04 2.69 L 19.58 6.52 L 20.54 15.83 L 12.96 21.31 L 4.42 17.48 L 3.46 8.17 Z" />
      {children}
    </svg>
  );
});

export default TriboNine;
