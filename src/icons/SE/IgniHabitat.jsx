import React from 'react';

export const iconData = {
  "id": "IgniHabitat",
  "name": "IgniHabitat",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 7.94 L 9.35 6.97 L 13.32 2.92 L 15.97 7.93 L 21.05 10.45 L 17.10 14.52 L 16.27 20.12 L 11.18 17.63 L 5.59 18.57 L 6.39 12.96 Z"
      }
    ]
  ]
};

export const IgniHabitat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 7.94 L 9.35 6.97 L 13.32 2.92 L 15.97 7.93 L 21.05 10.45 L 17.10 14.52 L 16.27 20.12 L 11.18 17.63 L 5.59 18.57 L 6.39 12.96 Z" />
      {children}
    </svg>
  );
});

export default IgniHabitat;
