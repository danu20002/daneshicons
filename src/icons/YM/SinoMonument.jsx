import React from 'react';

export const iconData = {
  "id": "SinoMonument",
  "name": "SinoMonument",
  "category": "YM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 8.30 0 1 0 16.61 0 a 8.30 8.30 0 1 0 -16.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 7.02 a 6.64 1.9930115956440568 0 1 0 13.29 0 a 6.64 1.9930115956440568 0 1 0 -13.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 10.34 a 8.14 2.440930730389026 0 1 0 16.27 0 a 8.14 2.440930730389026 0 1 0 -16.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 13.66 a 8.14 2.440930730389026 0 1 0 16.27 0 a 8.14 2.440930730389026 0 1 0 -16.27 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.36 16.98 a 6.64 1.9930115956440564 0 1 0 13.29 0 a 6.64 1.9930115956440564 0 1 0 -13.29 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.70 A 2 2 0 0 0 12.00 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.70 A 2 2 0 0 1 12.00 20.30"
      }
    ]
  ]
};

export const SinoMonument = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.70 12.00 a 8.30 8.30 0 1 0 16.61 0 a 8.30 8.30 0 1 0 -16.61 0" />
      <path d="M 5.36 7.02 a 6.64 1.9930115956440568 0 1 0 13.29 0 a 6.64 1.9930115956440568 0 1 0 -13.29 0" />
      <path d="M 3.86 10.34 a 8.14 2.440930730389026 0 1 0 16.27 0 a 8.14 2.440930730389026 0 1 0 -16.27 0" />
      <path d="M 3.86 13.66 a 8.14 2.440930730389026 0 1 0 16.27 0 a 8.14 2.440930730389026 0 1 0 -16.27 0" />
      <path d="M 5.36 16.98 a 6.64 1.9930115956440564 0 1 0 13.29 0 a 6.64 1.9930115956440564 0 1 0 -13.29 0" />
      <path d="M 12.00 3.70 A 2 2 0 0 0 12.00 20.30" />
      <path d="M 12.00 3.70 A 2 2 0 0 1 12.00 20.30" />
      {children}
    </svg>
  );
});

export default SinoMonument;
