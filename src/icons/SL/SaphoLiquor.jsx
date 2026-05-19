import React from 'react';

export const iconData = {
  "id": "SaphoLiquor",
  "name": "SaphoLiquor",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.99 7.82 L 15.99 7.82"
      }
    ],
    [
      "path",
      {
        "d": "M 15.97 10.70 L 17.21 14.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.47 15.38 L 11.23 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.55 15.39 L 6.31 13.04"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 10.72 L 9.26 6.91"
      }
    ]
  ]
};

export const SaphoLiquor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.99 7.82 L 15.99 7.82" />
      <path d="M 15.97 10.70 L 17.21 14.50" />
      <path d="M 14.47 15.38 L 11.23 17.73" />
      <path d="M 9.55 15.39 L 6.31 13.04" />
      <path d="M 8.02 10.72 L 9.26 6.91" />
      {children}
    </svg>
  );
});

export default SaphoLiquor;
