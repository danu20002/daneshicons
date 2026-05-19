import React from 'react';

export const iconData = {
  "id": "SubtilRadial",
  "name": "SubtilRadial",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.46 12.00 L 15.54 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 12.00 L 11.76 10.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.46 12.00 L 11.76 13.98"
      }
    ]
  ]
};

export const SubtilRadial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.46 12.00 L 15.54 12.00" />
      <path d="M 8.46 12.00 L 11.76 10.02" />
      <path d="M 8.46 12.00 L 11.76 13.98" />
      {children}
    </svg>
  );
});

export default SubtilRadial;
