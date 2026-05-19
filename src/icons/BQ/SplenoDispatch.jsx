import React from 'react';

export const iconData = {
  "id": "SplenoDispatch",
  "name": "SplenoDispatch",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.38 10.69 L 15.38 10.69"
      }
    ],
    [
      "path",
      {
        "d": "M 13.05 11.00 L 14.29 14.81"
      }
    ],
    [
      "path",
      {
        "d": "M 13.27 12.69 L 10.04 15.04"
      }
    ],
    [
      "path",
      {
        "d": "M 11.73 13.43 L 8.50 11.07"
      }
    ],
    [
      "path",
      {
        "d": "M 10.56 12.19 L 11.80 8.38"
      }
    ]
  ]
};

export const SplenoDispatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.38 10.69 L 15.38 10.69" />
      <path d="M 13.05 11.00 L 14.29 14.81" />
      <path d="M 13.27 12.69 L 10.04 15.04" />
      <path d="M 11.73 13.43 L 8.50 11.07" />
      <path d="M 10.56 12.19 L 11.80 8.38" />
      {children}
    </svg>
  );
});

export default SplenoDispatch;
