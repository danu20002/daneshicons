import React from 'react';

export const iconData = {
  "id": "UlceraSpear",
  "name": "UlceraSpear",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.16 3.13 L 12.21 7.38 L 18.63 3.70 L 16.46 10.77 L 21.94 15.74 L 14.54 15.86 L 11.51 22.61 L 9.11 15.61 L 1.76 14.81 L 7.67 10.37 Z"
      }
    ]
  ]
};

export const UlceraSpear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.16 3.13 L 12.21 7.38 L 18.63 3.70 L 16.46 10.77 L 21.94 15.74 L 14.54 15.86 L 11.51 22.61 L 9.11 15.61 L 1.76 14.81 L 7.67 10.37 Z" />
      {children}
    </svg>
  );
});

export default UlceraSpear;
