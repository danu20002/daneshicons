import React from 'react';

export const iconData = {
  "id": "TraumaCarbon",
  "name": "TraumaCarbon",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.24 5.39 L 20.76 5.39 L 20.76 18.61 L 3.24 18.61 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.24 5.39 L 8.21 0.42 L 25.74 0.42 L 20.76 5.39"
      }
    ],
    [
      "path",
      {
        "d": "M 20.76 5.39 L 25.74 0.42 L 25.74 13.63 L 20.76 18.61"
      }
    ]
  ]
};

export const TraumaCarbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.24 5.39 L 20.76 5.39 L 20.76 18.61 L 3.24 18.61 Z" />
      <path d="M 3.24 5.39 L 8.21 0.42 L 25.74 0.42 L 20.76 5.39" />
      <path d="M 20.76 5.39 L 25.74 0.42 L 25.74 13.63 L 20.76 18.61" />
      {children}
    </svg>
  );
});

export default TraumaCarbon;
