import React from 'react';

export const iconData = {
  "id": "ResoSing",
  "name": "ResoSing",
  "category": "TF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.77 15.71 L 9.20 17.04"
      }
    ],
    [
      "path",
      {
        "d": "M 20.85 17.86 Q 18.02 14.92 8.89 21.55"
      }
    ],
    [
      "path",
      {
        "d": "M 8.29 7.16 L 13.23 9.41"
      }
    ]
  ]
};

export const ResoSing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.77 15.71 L 9.20 17.04" />
      <path d="M 20.85 17.86 Q 18.02 14.92 8.89 21.55" />
      <path d="M 8.29 7.16 L 13.23 9.41" />
      {children}
    </svg>
  );
});

export default ResoSing;
