import React from 'react';

export const iconData = {
  "id": "QualiReed",
  "name": "QualiReed",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.38 16.30 L 15.22 11.34 L 12.89 4.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.64 13.16 Q 13.71 6.43 16.45 15.42"
      }
    ],
    [
      "path",
      {
        "d": "M 11.29 15.36 L 11.85 10.13 L 4.36 10.96 L 8.91 13.20 L 12.18 21.95 L 4.97 3.97 L 8.20 8.91"
      }
    ],
    [
      "path",
      {
        "d": "M 12.73 5.69 C 5.31 2.33, 19.00 9.18, 16.74 5.69"
      }
    ]
  ]
};

export const QualiReed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.38 16.30 L 15.22 11.34 L 12.89 4.52" />
      <path d="M 20.64 13.16 Q 13.71 6.43 16.45 15.42" />
      <path d="M 11.29 15.36 L 11.85 10.13 L 4.36 10.96 L 8.91 13.20 L 12.18 21.95 L 4.97 3.97 L 8.20 8.91" />
      <path d="M 12.73 5.69 C 5.31 2.33, 19.00 9.18, 16.74 5.69" />
      {children}
    </svg>
  );
});

export default QualiReed;
