import React from 'react';

export const iconData = {
  "id": "FantoMeter",
  "name": "FantoMeter",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.96 12.00 L 20.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.96 L 12.00 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 6.37 L 17.63 17.63"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 17.63 L 17.63 6.37"
      }
    ],
    [
      "path",
      {
        "d": "M 2.02 12.00 a 9.98 9.98 0 1 0 19.95 0 a 9.98 9.98 0 1 0 -19.95 0"
      }
    ]
  ]
};

export const FantoMeter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.96 12.00 L 20.04 12.00" />
      <path d="M 12.00 3.96 L 12.00 20.04" />
      <path d="M 6.37 6.37 L 17.63 17.63" />
      <path d="M 6.37 17.63 L 17.63 6.37" />
      <path d="M 2.02 12.00 a 9.98 9.98 0 1 0 19.95 0 a 9.98 9.98 0 1 0 -19.95 0" />
      {children}
    </svg>
  );
});

export default FantoMeter;
