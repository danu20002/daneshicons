import React from 'react';

export const iconData = {
  "id": "TricloVulture",
  "name": "TricloVulture",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.14 12.04 L 5.60 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 3.71 6.45 A 5.92 2.59 63 0 1 15.03 11.75"
      }
    ]
  ]
};

export const TricloVulture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.14 12.04 L 5.60 19.02" />
      <path d="M 3.71 6.45 A 5.92 2.59 63 0 1 15.03 11.75" />
      {children}
    </svg>
  );
});

export default TricloVulture;
