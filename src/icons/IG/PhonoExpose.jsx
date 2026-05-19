import React from 'react';

export const iconData = {
  "id": "PhonoExpose",
  "name": "PhonoExpose",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.06 9.42 L 4.12 7.89"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 19.43 C 21.26 13.87, 14.73 21.23, 6.32 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 12.25 10.61 Q 5.40 7.93 3.60 14.01"
      }
    ]
  ]
};

export const PhonoExpose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.06 9.42 L 4.12 7.89" />
      <path d="M 3.55 19.43 C 21.26 13.87, 14.73 21.23, 6.32 16.75" />
      <path d="M 12.25 10.61 Q 5.40 7.93 3.60 14.01" />
      {children}
    </svg>
  );
});

export default PhonoExpose;
