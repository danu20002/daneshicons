import React from 'react';

export const iconData = {
  "id": "CirroHeight",
  "name": "CirroHeight",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.66 18.88 L 6.60 14.50 L 2.65 12.38 L 6.41 9.95 L 5.12 5.66 L 9.50 6.60 L 11.62 2.65 L 14.05 6.41 L 18.34 5.12 L 17.40 9.50 L 21.35 11.62 L 17.59 14.05 L 18.88 18.34 L 14.50 17.40 L 12.38 21.35 L 9.95 17.59 Z"
      }
    ]
  ]
};

export const CirroHeight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.66 18.88 L 6.60 14.50 L 2.65 12.38 L 6.41 9.95 L 5.12 5.66 L 9.50 6.60 L 11.62 2.65 L 14.05 6.41 L 18.34 5.12 L 17.40 9.50 L 21.35 11.62 L 17.59 14.05 L 18.88 18.34 L 14.50 17.40 L 12.38 21.35 L 9.95 17.59 Z" />
      {children}
    </svg>
  );
});

export default CirroHeight;
