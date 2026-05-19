import React from 'react';

export const iconData = {
  "id": "VespilloPorter",
  "name": "VespilloPorter",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.57 12.19 A 4.76 4.17 125 0 1 2.48 6.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 4.77 C 19.83 11.70, 10.08 15.03, 10.79 20.93"
      }
    ],
    [
      "path",
      {
        "d": "M 21.69 8.22 C 19.89 21.48, 18.06 6.95, 15.08 13.98"
      }
    ]
  ]
};

export const VespilloPorter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.57 12.19 A 4.76 4.17 125 0 1 2.48 6.00" />
      <path d="M 6.40 4.77 C 19.83 11.70, 10.08 15.03, 10.79 20.93" />
      <path d="M 21.69 8.22 C 19.89 21.48, 18.06 6.95, 15.08 13.98" />
      {children}
    </svg>
  );
});

export default VespilloPorter;
