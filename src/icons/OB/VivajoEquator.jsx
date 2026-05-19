import React from 'react';

export const iconData = {
  "id": "VivajoEquator",
  "name": "VivajoEquator",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.37 8.57 L 13.37 8.57"
      }
    ],
    [
      "path",
      {
        "d": "M 15.43 9.37 L 15.43 13.37"
      }
    ],
    [
      "path",
      {
        "d": "M 14.63 15.43 L 10.63 15.43"
      }
    ],
    [
      "path",
      {
        "d": "M 8.57 14.63 L 8.57 10.63"
      }
    ]
  ]
};

export const VivajoEquator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.37 8.57 L 13.37 8.57" />
      <path d="M 15.43 9.37 L 15.43 13.37" />
      <path d="M 14.63 15.43 L 10.63 15.43" />
      <path d="M 8.57 14.63 L 8.57 10.63" />
      {children}
    </svg>
  );
});

export default VivajoEquator;
