import React from 'react';

export const iconData = {
  "id": "VelociSuccumb",
  "name": "VelociSuccumb",
  "category": "DZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.02 19.86 L 9.96 18.28 L 10.89 19.15 L 10.17 20.02 L 9.53 19.59 L 12.12 17.93 L 10.17 19.97 L 9.04 20.70 L 10.14 18.42 L 10.20 19.82 L 11.41 20.16 L 13.35 21.80 L 11.56 21.32 L 14.10 18.54 L 11.71 21.23 L 9.86 22.41 L 12.03 21.24 L 14.55 20.26 L 13.00 18.85 L 10.40 21.26"
      }
    ]
  ]
};

export const VelociSuccumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.02 19.86 L 9.96 18.28 L 10.89 19.15 L 10.17 20.02 L 9.53 19.59 L 12.12 17.93 L 10.17 19.97 L 9.04 20.70 L 10.14 18.42 L 10.20 19.82 L 11.41 20.16 L 13.35 21.80 L 11.56 21.32 L 14.10 18.54 L 11.71 21.23 L 9.86 22.41 L 12.03 21.24 L 14.55 20.26 L 13.00 18.85 L 10.40 21.26" />
      {children}
    </svg>
  );
});

export default VelociSuccumb;
