import React from 'react';

export const iconData = {
  "id": "TranquilloInduce",
  "name": "TranquilloInduce",
  "category": "WS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.00 4.00 L 4.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.67 4.00 L 6.67 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 4.00 L 9.33 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.00 L 12.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 14.67 4.00 L 14.67 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 4.00 L 17.33 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 20.00 4.00 L 20.00 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 4.00 L 20.00 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 6.67 L 20.00 6.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 9.33 L 20.00 9.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 12.00 L 20.00 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 14.67 L 20.00 14.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 17.33 L 20.00 17.33"
      }
    ],
    [
      "path",
      {
        "d": "M 4.00 20.00 L 20.00 20.00"
      }
    ]
  ]
};

export const TranquilloInduce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.00 4.00 L 4.00 20.00" />
      <path d="M 6.67 4.00 L 6.67 20.00" />
      <path d="M 9.33 4.00 L 9.33 20.00" />
      <path d="M 12.00 4.00 L 12.00 20.00" />
      <path d="M 14.67 4.00 L 14.67 20.00" />
      <path d="M 17.33 4.00 L 17.33 20.00" />
      <path d="M 20.00 4.00 L 20.00 20.00" />
      <path d="M 4.00 4.00 L 20.00 4.00" />
      <path d="M 4.00 6.67 L 20.00 6.67" />
      <path d="M 4.00 9.33 L 20.00 9.33" />
      <path d="M 4.00 12.00 L 20.00 12.00" />
      <path d="M 4.00 14.67 L 20.00 14.67" />
      <path d="M 4.00 17.33 L 20.00 17.33" />
      <path d="M 4.00 20.00 L 20.00 20.00" />
      {children}
    </svg>
  );
});

export default TranquilloInduce;
