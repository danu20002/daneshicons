import React from 'react';

export const iconData = {
  "id": "ClaroDestiny",
  "name": "ClaroDestiny",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.92 15.28 L 5.12 6.65 L 13.20 3.37 L 20.08 8.72 L 18.88 17.35 L 10.80 20.63 Z"
      }
    ]
  ]
};

export const ClaroDestiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.92 15.28 L 5.12 6.65 L 13.20 3.37 L 20.08 8.72 L 18.88 17.35 L 10.80 20.63 Z" />
      {children}
    </svg>
  );
});

export default ClaroDestiny;
