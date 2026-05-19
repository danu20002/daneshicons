import React from 'react';

export const iconData = {
  "id": "PhysioMutation",
  "name": "PhysioMutation",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.54 12.00 L 17.46 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 12.00 L 13.04 9.35"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 12.00 L 13.04 14.65"
      }
    ]
  ]
};

export const PhysioMutation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.54 12.00 L 17.46 12.00" />
      <path d="M 17.46 12.00 L 13.04 9.35" />
      <path d="M 17.46 12.00 L 13.04 14.65" />
      {children}
    </svg>
  );
});

export default PhysioMutation;
