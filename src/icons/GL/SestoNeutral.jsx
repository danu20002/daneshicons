import React from 'react';

export const iconData = {
  "id": "SestoNeutral",
  "name": "SestoNeutral",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.92 21.31 L 9.28 15.88 L 3.95 17.11 L 7.33 12.82 L 2.69 9.92 L 8.12 9.28 L 6.89 3.95 L 11.18 7.33 L 14.08 2.69 L 14.72 8.12 L 20.05 6.89 L 16.67 11.18 L 21.31 14.08 L 15.88 14.72 L 17.11 20.05 L 12.82 16.67 Z"
      }
    ]
  ]
};

export const SestoNeutral = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.92 21.31 L 9.28 15.88 L 3.95 17.11 L 7.33 12.82 L 2.69 9.92 L 8.12 9.28 L 6.89 3.95 L 11.18 7.33 L 14.08 2.69 L 14.72 8.12 L 20.05 6.89 L 16.67 11.18 L 21.31 14.08 L 15.88 14.72 L 17.11 20.05 L 12.82 16.67 Z" />
      {children}
    </svg>
  );
});

export default SestoNeutral;
