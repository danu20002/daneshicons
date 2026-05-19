import React from 'react';

export const iconData = {
  "id": "VentoTherapy",
  "name": "VentoTherapy",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 12.00 Q 16.39 13.43 19.39 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 17.37 Q 14.72 15.74 14.82 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 14.82 20.69 Q 12.00 16.62 9.18 20.69"
      }
    ],
    [
      "path",
      {
        "d": "M 9.18 20.69 Q 9.28 15.74 4.61 17.37"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 17.37 Q 7.61 13.43 2.86 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.86 12.00 Q 7.61 10.57 4.61 6.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 6.63 Q 9.28 8.26 9.18 3.31"
      }
    ],
    [
      "path",
      {
        "d": "M 9.18 3.31 Q 12.00 7.38 14.82 3.31"
      }
    ],
    [
      "path",
      {
        "d": "M 14.82 3.31 Q 14.72 8.26 19.39 6.63"
      }
    ],
    [
      "path",
      {
        "d": "M 19.39 6.63 Q 16.39 10.57 21.14 12.00"
      }
    ]
  ]
};

export const VentoTherapy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 12.00 Q 16.39 13.43 19.39 17.37" />
      <path d="M 19.39 17.37 Q 14.72 15.74 14.82 20.69" />
      <path d="M 14.82 20.69 Q 12.00 16.62 9.18 20.69" />
      <path d="M 9.18 20.69 Q 9.28 15.74 4.61 17.37" />
      <path d="M 4.61 17.37 Q 7.61 13.43 2.86 12.00" />
      <path d="M 2.86 12.00 Q 7.61 10.57 4.61 6.63" />
      <path d="M 4.61 6.63 Q 9.28 8.26 9.18 3.31" />
      <path d="M 9.18 3.31 Q 12.00 7.38 14.82 3.31" />
      <path d="M 14.82 3.31 Q 14.72 8.26 19.39 6.63" />
      <path d="M 19.39 6.63 Q 16.39 10.57 21.14 12.00" />
      {children}
    </svg>
  );
});

export default VentoTherapy;
