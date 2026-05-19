import React from 'react';

export const iconData = {
  "id": "RectiStem",
  "name": "RectiStem",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.75 3.18 L 18.12 5.53 L 20.88 12.75 L 16.95 19.41 L 9.30 20.49 L 3.68 15.18 L 4.33 7.47 Z"
      }
    ]
  ]
};

export const RectiStem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.75 3.18 L 18.12 5.53 L 20.88 12.75 L 16.95 19.41 L 9.30 20.49 L 3.68 15.18 L 4.33 7.47 Z" />
      {children}
    </svg>
  );
});

export default RectiStem;
