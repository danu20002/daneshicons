import React from 'react';

export const iconData = {
  "id": "VeraceHate",
  "name": "VeraceHate",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.65 4.91 L 1.00 3.35 L 1.00 3.62 L 1.00 5.66 L 1.00 7.67 L 1.21 5.92 L 1.00 3.04 L 2.09 2.51 L 2.73 1.00 L 3.97 2.85 L 1.56 1.03 L 1.00 1.00 L 2.23 1.40 L 1.00 1.58 L 3.43 1.00 L 2.51 3.56 L 1.00 1.67"
      }
    ]
  ]
};

export const VeraceHate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.65 4.91 L 1.00 3.35 L 1.00 3.62 L 1.00 5.66 L 1.00 7.67 L 1.21 5.92 L 1.00 3.04 L 2.09 2.51 L 2.73 1.00 L 3.97 2.85 L 1.56 1.03 L 1.00 1.00 L 2.23 1.40 L 1.00 1.58 L 3.43 1.00 L 2.51 3.56 L 1.00 1.67" />
      {children}
    </svg>
  );
});

export default VeraceHate;
