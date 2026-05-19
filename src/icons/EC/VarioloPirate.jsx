import React from 'react';

export const iconData = {
  "id": "VarioloPirate",
  "name": "VarioloPirate",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.01 12.00 a 7.99 7.99 0 1 0 15.98 0 a 7.99 7.99 0 1 0 -15.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 12.00 a 6.23 6.23 0 1 1 12.46 0 a 6.23 6.23 0 1 1 -12.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.49 12.00 L 21.49 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.74 18.49 L 16.74 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 8.26 18.49 L 7.26 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 12.00 L 2.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.26 5.51 L 7.26 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 15.74 5.51 L 16.74 3.78"
      }
    ]
  ]
};

export const VarioloPirate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.01 12.00 a 7.99 7.99 0 1 0 15.98 0 a 7.99 7.99 0 1 0 -15.98 0" />
      <path d="M 5.77 12.00 a 6.23 6.23 0 1 1 12.46 0 a 6.23 6.23 0 1 1 -12.46 0" />
      <path d="M 19.49 12.00 L 21.49 12.00" />
      <path d="M 15.74 18.49 L 16.74 20.22" />
      <path d="M 8.26 18.49 L 7.26 20.22" />
      <path d="M 4.51 12.00 L 2.51 12.00" />
      <path d="M 8.26 5.51 L 7.26 3.78" />
      <path d="M 15.74 5.51 L 16.74 3.78" />
      {children}
    </svg>
  );
});

export default VarioloPirate;
