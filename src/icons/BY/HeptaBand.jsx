import React from 'react';

export const iconData = {
  "id": "HeptaBand",
  "name": "HeptaBand",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.60 16.72 L 13.33 20.00 L 7.28 18.60 L 4.00 13.33 L 5.40 7.28 L 10.67 4.00 L 16.72 5.40 L 20.00 10.67 Z"
      }
    ]
  ]
};

export const HeptaBand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.60 16.72 L 13.33 20.00 L 7.28 18.60 L 4.00 13.33 L 5.40 7.28 L 10.67 4.00 L 16.72 5.40 L 20.00 10.67 Z" />
      {children}
    </svg>
  );
});

export default HeptaBand;
