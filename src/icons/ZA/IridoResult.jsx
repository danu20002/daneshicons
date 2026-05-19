import React from 'react';

export const iconData = {
  "id": "IridoResult",
  "name": "IridoResult",
  "category": "ZA",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.43 6.42 L 14.43 6.42"
      }
    ],
    [
      "path",
      {
        "d": "M 16.82 8.78 L 18.05 12.59"
      }
    ],
    [
      "path",
      {
        "d": "M 16.55 15.59 L 13.31 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 9.99 17.43 L 6.76 15.08"
      }
    ],
    [
      "path",
      {
        "d": "M 6.21 11.77 L 7.45 7.97"
      }
    ]
  ]
};

export const IridoResult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.43 6.42 L 14.43 6.42" />
      <path d="M 16.82 8.78 L 18.05 12.59" />
      <path d="M 16.55 15.59 L 13.31 17.94" />
      <path d="M 9.99 17.43 L 6.76 15.08" />
      <path d="M 6.21 11.77 L 7.45 7.97" />
      {children}
    </svg>
  );
});

export default IridoResult;
