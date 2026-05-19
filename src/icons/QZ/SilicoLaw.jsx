import React from 'react';

export const iconData = {
  "id": "SilicoLaw",
  "name": "SilicoLaw",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.11 12.00 L 18.89 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.11 L 12.00 18.89"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 7.17 L 16.83 16.83"
      }
    ],
    [
      "path",
      {
        "d": "M 7.17 16.83 L 16.83 7.17"
      }
    ],
    [
      "path",
      {
        "d": "M 2.73 12.00 a 9.27 9.27 0 1 0 18.54 0 a 9.27 9.27 0 1 0 -18.54 0"
      }
    ]
  ]
};

export const SilicoLaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.11 12.00 L 18.89 12.00" />
      <path d="M 12.00 5.11 L 12.00 18.89" />
      <path d="M 7.17 7.17 L 16.83 16.83" />
      <path d="M 7.17 16.83 L 16.83 7.17" />
      <path d="M 2.73 12.00 a 9.27 9.27 0 1 0 18.54 0 a 9.27 9.27 0 1 0 -18.54 0" />
      {children}
    </svg>
  );
});

export default SilicoLaw;
