import React from 'react';

export const iconData = {
  "id": "VeneroClone",
  "name": "VeneroClone",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.44 5.75 L 19.56 5.75 L 19.56 18.25 L 4.44 18.25 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.44 5.75 L 8.91 1.29 L 24.03 1.29 L 19.56 5.75"
      }
    ],
    [
      "path",
      {
        "d": "M 19.56 5.75 L 24.03 1.29 L 24.03 13.78 L 19.56 18.25"
      }
    ]
  ]
};

export const VeneroClone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.44 5.75 L 19.56 5.75 L 19.56 18.25 L 4.44 18.25 Z" />
      <path d="M 4.44 5.75 L 8.91 1.29 L 24.03 1.29 L 19.56 5.75" />
      <path d="M 19.56 5.75 L 24.03 1.29 L 24.03 13.78 L 19.56 18.25" />
      {children}
    </svg>
  );
});

export default VeneroClone;
