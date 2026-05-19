import React from 'react';

export const iconData = {
  "id": "MarmoCorridor",
  "name": "MarmoCorridor",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.54 3.52 C 7.71 12.47, 10.72 7.00, 21.28 21.04"
      }
    ],
    [
      "path",
      {
        "d": "M 6.69 8.25 C 11.86 8.81, 5.46 11.50, 14.52 18.78"
      }
    ],
    [
      "path",
      {
        "d": "M 5.38 7.72 C 14.90 8.42, 15.99 13.95, 15.08 19.12"
      }
    ]
  ]
};

export const MarmoCorridor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.54 3.52 C 7.71 12.47, 10.72 7.00, 21.28 21.04" />
      <path d="M 6.69 8.25 C 11.86 8.81, 5.46 11.50, 14.52 18.78" />
      <path d="M 5.38 7.72 C 14.90 8.42, 15.99 13.95, 15.08 19.12" />
      {children}
    </svg>
  );
});

export default MarmoCorridor;
