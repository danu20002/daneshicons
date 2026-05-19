import React from 'react';

export const iconData = {
  "id": "UnctoRemote",
  "name": "UnctoRemote",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.36 3.66 L 13.73 7.60 L 22.54 10.41 L 14.94 15.69 L 8.10 21.92 L 7.33 12.70 Z"
      }
    ]
  ]
};

export const UnctoRemote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.36 3.66 L 13.73 7.60 L 22.54 10.41 L 14.94 15.69 L 8.10 21.92 L 7.33 12.70 Z" />
      {children}
    </svg>
  );
});

export default UnctoRemote;
