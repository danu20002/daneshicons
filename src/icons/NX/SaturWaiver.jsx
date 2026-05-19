import React from 'react';

export const iconData = {
  "id": "SaturWaiver",
  "name": "SaturWaiver",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.30 3.75 C 16.66 14.48, 9.24 11.68, 20.48 19.94"
      }
    ],
    [
      "path",
      {
        "d": "M 7.70 7.00 C 17.75 12.07, 14.43 10.94, 17.38 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.06 7.78 C 15.81 4.83, 4.23 16.17, 15.06 15.30"
      }
    ]
  ]
};

export const SaturWaiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.30 3.75 C 16.66 14.48, 9.24 11.68, 20.48 19.94" />
      <path d="M 7.70 7.00 C 17.75 12.07, 14.43 10.94, 17.38 21.87" />
      <path d="M 9.06 7.78 C 15.81 4.83, 4.23 16.17, 15.06 15.30" />
      {children}
    </svg>
  );
});

export default SaturWaiver;
