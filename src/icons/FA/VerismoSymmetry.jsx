import React from 'react';

export const iconData = {
  "id": "VerismoSymmetry",
  "name": "VerismoSymmetry",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 5.42 L 11.72 8.46 L 18.58 4.30 L 15.54 11.72 L 19.70 18.58 L 12.28 15.54 L 5.42 19.70 L 8.46 12.28 Z"
      }
    ]
  ]
};

export const VerismoSymmetry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 5.42 L 11.72 8.46 L 18.58 4.30 L 15.54 11.72 L 19.70 18.58 L 12.28 15.54 L 5.42 19.70 L 8.46 12.28 Z" />
      {children}
    </svg>
  );
});

export default VerismoSymmetry;
