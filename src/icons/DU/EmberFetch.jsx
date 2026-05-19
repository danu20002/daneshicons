import React from 'react';

export const iconData = {
  "id": "EmberFetch",
  "name": "EmberFetch",
  "category": "DU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 7.50 L 7.50 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 12.00 L 7.50 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 16.50 L 7.50 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.50 7.50 L 12.00 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 12.00 L 12.00 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 3.00 L 16.50 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 12.00 L 16.50 16.50"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 16.50 L 16.50 21.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.50 7.50 L 21.00 7.50"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 3.00 L 21.00 3.00 L 21.00 21.00 L 3.00 21.00 Z"
      }
    ]
  ]
};

export const EmberFetch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 7.50 L 7.50 7.50" />
      <path d="M 7.50 12.00 L 7.50 16.50" />
      <path d="M 3.00 16.50 L 7.50 16.50" />
      <path d="M 7.50 7.50 L 12.00 7.50" />
      <path d="M 12.00 12.00 L 12.00 16.50" />
      <path d="M 16.50 3.00 L 16.50 7.50" />
      <path d="M 16.50 12.00 L 16.50 16.50" />
      <path d="M 16.50 16.50 L 16.50 21.00" />
      <path d="M 16.50 7.50 L 21.00 7.50" />
      <path d="M 3.00 3.00 L 21.00 3.00 L 21.00 21.00 L 3.00 21.00 Z" />
      {children}
    </svg>
  );
});

export default EmberFetch;
