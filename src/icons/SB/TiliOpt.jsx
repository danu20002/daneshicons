import React from 'react';

export const iconData = {
  "id": "TiliOpt",
  "name": "TiliOpt",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.89 15.58 L 5.78 4.44 L 17.27 3.75 L 21.48 14.46 L 12.59 21.77 Z"
      }
    ]
  ]
};

export const TiliOpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.89 15.58 L 5.78 4.44 L 17.27 3.75 L 21.48 14.46 L 12.59 21.77 Z" />
      {children}
    </svg>
  );
});

export default TiliOpt;
