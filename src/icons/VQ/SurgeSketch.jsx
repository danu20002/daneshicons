import React from 'react';

export const iconData = {
  "id": "SurgeSketch",
  "name": "SurgeSketch",
  "category": "VQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.98 12.00 a 7.02 7.02 0 1 0 14.03 0 a 7.02 7.02 0 1 0 -14.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 12.00 a 4.54 4.54 0 1 1 9.08 0 a 4.54 4.54 0 1 1 -9.08 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.52 12.00 L 20.52 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 16.19 L 18.52 17.47"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 18.42 L 13.48 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 17.64 L 7.74 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 14.23 L 4.00 14.91"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 9.77 L 4.00 9.09"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 6.36 L 7.74 4.62"
      }
    ],
    [
      "path",
      {
        "d": "M 13.13 5.58 L 13.48 3.61"
      }
    ],
    [
      "path",
      {
        "d": "M 16.99 7.81 L 18.52 6.53"
      }
    ]
  ]
};

export const SurgeSketch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.98 12.00 a 7.02 7.02 0 1 0 14.03 0 a 7.02 7.02 0 1 0 -14.03 0" />
      <path d="M 7.46 12.00 a 4.54 4.54 0 1 1 9.08 0 a 4.54 4.54 0 1 1 -9.08 0" />
      <path d="M 18.52 12.00 L 20.52 12.00" />
      <path d="M 16.99 16.19 L 18.52 17.47" />
      <path d="M 13.13 18.42 L 13.48 20.39" />
      <path d="M 8.74 17.64 L 7.74 19.38" />
      <path d="M 5.88 14.23 L 4.00 14.91" />
      <path d="M 5.88 9.77 L 4.00 9.09" />
      <path d="M 8.74 6.36 L 7.74 4.62" />
      <path d="M 13.13 5.58 L 13.48 3.61" />
      <path d="M 16.99 7.81 L 18.52 6.53" />
      {children}
    </svg>
  );
});

export default SurgeSketch;
