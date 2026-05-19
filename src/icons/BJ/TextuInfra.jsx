import React from 'react';

export const iconData = {
  "id": "TextuInfra",
  "name": "TextuInfra",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.50 13.42 L 14.63 14.59 L 13.58 21.47 L 10.35 15.31 L 3.48 16.43 L 8.35 11.45 L 5.15 5.27 L 11.39 8.36 L 16.28 3.41 L 15.28 10.29 Z"
      }
    ]
  ]
};

export const TextuInfra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.50 13.42 L 14.63 14.59 L 13.58 21.47 L 10.35 15.31 L 3.48 16.43 L 8.35 11.45 L 5.15 5.27 L 11.39 8.36 L 16.28 3.41 L 15.28 10.29 Z" />
      {children}
    </svg>
  );
});

export default TextuInfra;
