import React from 'react';

export const iconData = {
  "id": "VersoOutcome",
  "name": "VersoOutcome",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.62 15.32 L 14.14 14.46 L 13.94 21.99 L 10.94 15.08 L 4.31 18.68 L 8.80 12.62 L 2.38 8.68 L 9.86 9.54 L 10.06 2.01 L 13.06 8.92 L 19.69 5.32 L 15.20 11.38 Z"
      }
    ]
  ]
};

export const VersoOutcome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.62 15.32 L 14.14 14.46 L 13.94 21.99 L 10.94 15.08 L 4.31 18.68 L 8.80 12.62 L 2.38 8.68 L 9.86 9.54 L 10.06 2.01 L 13.06 8.92 L 19.69 5.32 L 15.20 11.38 Z" />
      {children}
    </svg>
  );
});

export default VersoOutcome;
