import React from 'react';

export const iconData = {
  "id": "TenuSave",
  "name": "TenuSave",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.68 17.89 L 8.77 21.12 L 2.33 11.75 L 9.25 2.72 L 19.97 6.52 Z"
      }
    ]
  ]
};

export const TenuSave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.68 17.89 L 8.77 21.12 L 2.33 11.75 L 9.25 2.72 L 19.97 6.52 Z" />
      {children}
    </svg>
  );
});

export default TenuSave;
