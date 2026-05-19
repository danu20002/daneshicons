import React from 'react';

export const iconData = {
  "id": "SummoPrepare",
  "name": "SummoPrepare",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.64 10.54 L 7.25 9.70 L 7.40 7.69 L 8.57 7.91 L 5.64 10.57 L 6.18 9.30 L 4.52 10.56 L 2.48 9.78 L 1.00 12.62 L 3.11 9.68 L 1.51 10.63 L 3.43 9.16 L 2.27 10.07 L 3.09 8.23 L 1.00 8.73 L 3.08 6.48 L 1.00 5.31 L 1.00 6.64 L 1.00 9.37"
      }
    ]
  ]
};

export const SummoPrepare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.64 10.54 L 7.25 9.70 L 7.40 7.69 L 8.57 7.91 L 5.64 10.57 L 6.18 9.30 L 4.52 10.56 L 2.48 9.78 L 1.00 12.62 L 3.11 9.68 L 1.51 10.63 L 3.43 9.16 L 2.27 10.07 L 3.09 8.23 L 1.00 8.73 L 3.08 6.48 L 1.00 5.31 L 1.00 6.64 L 1.00 9.37" />
      {children}
    </svg>
  );
});

export default SummoPrepare;
