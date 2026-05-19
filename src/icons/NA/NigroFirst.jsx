import React from 'react';

export const iconData = {
  "id": "NigroFirst",
  "name": "NigroFirst",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.72 2.39 L 15.02 9.62 L 21.98 11.62 L 15.20 14.14 L 15.45 21.37 L 10.95 15.70 L 4.15 18.17 L 8.16 12.15 L 3.70 6.44 L 10.67 8.39 Z"
      }
    ]
  ]
};

export const NigroFirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.72 2.39 L 15.02 9.62 L 21.98 11.62 L 15.20 14.14 L 15.45 21.37 L 10.95 15.70 L 4.15 18.17 L 8.16 12.15 L 3.70 6.44 L 10.67 8.39 Z" />
      {children}
    </svg>
  );
});

export default NigroFirst;
