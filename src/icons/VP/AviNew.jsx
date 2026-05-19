import React from 'react';

export const iconData = {
  "id": "AviNew",
  "name": "AviNew",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 5.38 L 20.51 5.38 L 20.51 18.62 L 3.49 18.62 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 5.38 L 8.43 0.45 L 25.44 0.45 L 20.51 5.38"
      }
    ],
    [
      "path",
      {
        "d": "M 20.51 5.38 L 25.44 0.45 L 25.44 13.68 L 20.51 18.62"
      }
    ]
  ]
};

export const AviNew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 5.38 L 20.51 5.38 L 20.51 18.62 L 3.49 18.62 Z" />
      <path d="M 3.49 5.38 L 8.43 0.45 L 25.44 0.45 L 20.51 5.38" />
      <path d="M 20.51 5.38 L 25.44 0.45 L 25.44 13.68 L 20.51 18.62" />
      {children}
    </svg>
  );
});

export default AviNew;
