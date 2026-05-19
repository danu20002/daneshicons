import React from 'react';

export const iconData = {
  "id": "VastoParty",
  "name": "VastoParty",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.76 12.09 L 6.79 5.61 L 13.75 3.94 L 19.39 8.34 L 19.47 15.50 L 13.92 20.02 L 6.93 18.50 Z"
      }
    ]
  ]
};

export const VastoParty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.76 12.09 L 6.79 5.61 L 13.75 3.94 L 19.39 8.34 L 19.47 15.50 L 13.92 20.02 L 6.93 18.50 Z" />
      {children}
    </svg>
  );
});

export default VastoParty;
