import React from 'react';

export const iconData = {
  "id": "NarcisoKindle",
  "name": "NarcisoKindle",
  "category": "ZT",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.58 12.00 Q 15.09 13.79 16.29 19.43"
      }
    ],
    [
      "path",
      {
        "d": "M 16.29 19.43 Q 12.00 15.57 7.71 19.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 19.43 Q 8.91 13.79 3.42 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.42 12.00 Q 8.91 10.21 7.71 4.57"
      }
    ],
    [
      "path",
      {
        "d": "M 7.71 4.57 Q 12.00 8.43 16.29 4.57"
      }
    ],
    [
      "path",
      {
        "d": "M 16.29 4.57 Q 15.09 10.21 20.58 12.00"
      }
    ]
  ]
};

export const NarcisoKindle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.58 12.00 Q 15.09 13.79 16.29 19.43" />
      <path d="M 16.29 19.43 Q 12.00 15.57 7.71 19.43" />
      <path d="M 7.71 19.43 Q 8.91 13.79 3.42 12.00" />
      <path d="M 3.42 12.00 Q 8.91 10.21 7.71 4.57" />
      <path d="M 7.71 4.57 Q 12.00 8.43 16.29 4.57" />
      <path d="M 16.29 4.57 Q 15.09 10.21 20.58 12.00" />
      {children}
    </svg>
  );
});

export default NarcisoKindle;
