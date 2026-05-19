import React from 'react';

export const iconData = {
  "id": "RegioStore",
  "name": "RegioStore",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.69 7.40 L 15.69 7.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.14 14.03 L 14.14 17.49"
      }
    ],
    [
      "path",
      {
        "d": "M 8.18 14.57 L 6.18 11.10"
      }
    ]
  ]
};

export const RegioStore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.69 7.40 L 15.69 7.40" />
      <path d="M 16.14 14.03 L 14.14 17.49" />
      <path d="M 8.18 14.57 L 6.18 11.10" />
      {children}
    </svg>
  );
});

export default RegioStore;
