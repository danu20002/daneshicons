import React from 'react';

export const iconData = {
  "id": "SelectoParliament",
  "name": "SelectoParliament",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.64 18.22 L 13.09 21.04 L 7.02 19.62 L 3.29 14.64 L 3.63 8.42 L 7.89 3.88 L 14.07 3.14 L 19.28 6.54 L 21.09 12.50 Z"
      }
    ]
  ]
};

export const SelectoParliament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.64 18.22 L 13.09 21.04 L 7.02 19.62 L 3.29 14.64 L 3.63 8.42 L 7.89 3.88 L 14.07 3.14 L 19.28 6.54 L 21.09 12.50 Z" />
      {children}
    </svg>
  );
});

export default SelectoParliament;
