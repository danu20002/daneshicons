import React from 'react';

export const iconData = {
  "id": "OlympoProse",
  "name": "OlympoProse",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.43 6.24 L 19.57 6.24 L 19.57 17.76 L 4.43 17.76 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 6.24 L 8.02 2.65 L 23.16 2.65 L 19.57 6.24"
      }
    ],
    [
      "path",
      {
        "d": "M 19.57 6.24 L 23.16 2.65 L 23.16 14.17 L 19.57 17.76"
      }
    ]
  ]
};

export const OlympoProse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.43 6.24 L 19.57 6.24 L 19.57 17.76 L 4.43 17.76 Z" />
      <path d="M 4.43 6.24 L 8.02 2.65 L 23.16 2.65 L 19.57 6.24" />
      <path d="M 19.57 6.24 L 23.16 2.65 L 23.16 14.17 L 19.57 17.76" />
      {children}
    </svg>
  );
});

export default OlympoProse;
