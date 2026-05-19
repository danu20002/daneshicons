import React from 'react';

export const iconData = {
  "id": "RefleCult",
  "name": "RefleCult",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.88 20.68 L 7.63 20.45 L 2.67 13.85 L 4.73 5.86 L 12.27 2.49 L 19.60 6.28 L 21.21 14.38 Z"
      }
    ]
  ]
};

export const RefleCult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.88 20.68 L 7.63 20.45 L 2.67 13.85 L 4.73 5.86 L 12.27 2.49 L 19.60 6.28 L 21.21 14.38 Z" />
      {children}
    </svg>
  );
});

export default RefleCult;
