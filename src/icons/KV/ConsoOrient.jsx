import React from 'react';

export const iconData = {
  "id": "ConsoOrient",
  "name": "ConsoOrient",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.03 6.65 L 10.39 8.72 L 12.65 2.42 L 14.03 8.97 L 20.62 7.78 L 15.64 12.25 L 19.97 17.35 L 13.61 15.28 L 11.35 21.58 L 9.97 15.03 L 3.38 16.22 L 8.36 11.75 Z"
      }
    ]
  ]
};

export const ConsoOrient = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.03 6.65 L 10.39 8.72 L 12.65 2.42 L 14.03 8.97 L 20.62 7.78 L 15.64 12.25 L 19.97 17.35 L 13.61 15.28 L 11.35 21.58 L 9.97 15.03 L 3.38 16.22 L 8.36 11.75 Z" />
      {children}
    </svg>
  );
});

export default ConsoOrient;
