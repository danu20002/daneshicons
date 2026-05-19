import React from 'react';

export const iconData = {
  "id": "SpheroFury",
  "name": "SpheroFury",
  "category": "Y",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.59 12.00 a 7.41 7.41 0 1 0 14.82 0 a 7.41 7.41 0 1 0 -14.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.18 12.00 a 5.82 5.82 0 1 1 11.65 0 a 5.82 5.82 0 1 1 -11.65 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 12.00 L 20.91 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 17.98 L 16.45 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 17.98 L 7.55 19.72"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 12.00 L 3.09 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.55 6.02 L 7.55 4.28"
      }
    ],
    [
      "path",
      {
        "d": "M 15.45 6.02 L 16.45 4.28"
      }
    ]
  ]
};

export const SpheroFury = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.59 12.00 a 7.41 7.41 0 1 0 14.82 0 a 7.41 7.41 0 1 0 -14.82 0" />
      <path d="M 6.18 12.00 a 5.82 5.82 0 1 1 11.65 0 a 5.82 5.82 0 1 1 -11.65 0" />
      <path d="M 18.91 12.00 L 20.91 12.00" />
      <path d="M 15.45 17.98 L 16.45 19.72" />
      <path d="M 8.55 17.98 L 7.55 19.72" />
      <path d="M 5.09 12.00 L 3.09 12.00" />
      <path d="M 8.55 6.02 L 7.55 4.28" />
      <path d="M 15.45 6.02 L 16.45 4.28" />
      {children}
    </svg>
  );
});

export default SpheroFury;
