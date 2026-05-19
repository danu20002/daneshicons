import React from 'react';

export const iconData = {
  "id": "UtopiaOrigin",
  "name": "UtopiaOrigin",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.67 4.05 L 12.68 8.55 L 19.95 6.67 L 15.45 12.68 L 17.33 19.95 L 11.32 15.45 L 4.05 17.33 L 8.55 11.32 Z"
      }
    ]
  ]
};

export const UtopiaOrigin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.67 4.05 L 12.68 8.55 L 19.95 6.67 L 15.45 12.68 L 17.33 19.95 L 11.32 15.45 L 4.05 17.33 L 8.55 11.32 Z" />
      {children}
    </svg>
  );
});

export default UtopiaOrigin;
