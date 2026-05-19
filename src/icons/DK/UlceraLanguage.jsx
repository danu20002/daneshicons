import React from 'react';

export const iconData = {
  "id": "UlceraLanguage",
  "name": "UlceraLanguage",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.39 20.54 L 5.57 17.63 L 3.59 10.48 L 7.95 4.48 L 15.35 4.14 L 20.24 9.72 L 18.92 17.02 Z"
      }
    ]
  ]
};

export const UlceraLanguage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.39 20.54 L 5.57 17.63 L 3.59 10.48 L 7.95 4.48 L 15.35 4.14 L 20.24 9.72 L 18.92 17.02 Z" />
      {children}
    </svg>
  );
});

export default UlceraLanguage;
