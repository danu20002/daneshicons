import React from 'react';

export const iconData = {
  "id": "RupoEnvelope",
  "name": "RupoEnvelope",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.03 4.74 L 14.57 3.59 L 20.18 8.77 L 19.63 16.38 L 13.33 20.69 L 6.03 18.46 L 3.23 11.36 Z"
      }
    ]
  ]
};

export const RupoEnvelope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.03 4.74 L 14.57 3.59 L 20.18 8.77 L 19.63 16.38 L 13.33 20.69 L 6.03 18.46 L 3.23 11.36 Z" />
      {children}
    </svg>
  );
});

export default RupoEnvelope;
