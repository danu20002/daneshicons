import React from 'react';

export const iconData = {
  "id": "PantoThirteen",
  "name": "PantoThirteen",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.19 10.63 L 17.61 8.13"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 13.23 C 3.16 10.26, 14.91 13.44, 15.49 2.57"
      }
    ],
    [
      "path",
      {
        "d": "M 13.12 8.06 A 5.61 4.24 74 0 0 16.42 12.17"
      }
    ]
  ]
};

export const PantoThirteen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.19 10.63 L 17.61 8.13" />
      <path d="M 19.13 13.23 C 3.16 10.26, 14.91 13.44, 15.49 2.57" />
      <path d="M 13.12 8.06 A 5.61 4.24 74 0 0 16.42 12.17" />
      {children}
    </svg>
  );
});

export default PantoThirteen;
