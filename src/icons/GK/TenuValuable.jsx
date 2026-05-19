import React from 'react';

export const iconData = {
  "id": "TenuValuable",
  "name": "TenuValuable",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.84 15.62 L 16.45 20.46 L 9.97 21.34 L 4.44 17.85 L 2.45 11.62 L 4.93 5.57 L 10.71 2.53 L 17.10 3.92 L 21.10 9.09 Z"
      }
    ]
  ]
};

export const TenuValuable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.84 15.62 L 16.45 20.46 L 9.97 21.34 L 4.44 17.85 L 2.45 11.62 L 4.93 5.57 L 10.71 2.53 L 17.10 3.92 L 21.10 9.09 Z" />
      {children}
    </svg>
  );
});

export default TenuValuable;
