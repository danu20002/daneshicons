import React from 'react';

export const iconData = {
  "id": "SylvanoTill",
  "name": "SylvanoTill",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.35 16.28 L 7.19 8.49 L 13.12 1.50 L 17.44 9.59 L 20.53 18.22 L 11.37 17.92 Z"
      }
    ]
  ]
};

export const SylvanoTill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.35 16.28 L 7.19 8.49 L 13.12 1.50 L 17.44 9.59 L 20.53 18.22 L 11.37 17.92 Z" />
      {children}
    </svg>
  );
});

export default SylvanoTill;
