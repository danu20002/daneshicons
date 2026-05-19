import React from 'react';

export const iconData = {
  "id": "PavoValue",
  "name": "PavoValue",
  "category": "FQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.02 5.28 L 18.72 17.02 L 6.98 18.72 L 5.28 6.98 Z"
      }
    ]
  ]
};

export const PavoValue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.02 5.28 L 18.72 17.02 L 6.98 18.72 L 5.28 6.98 Z" />
      {children}
    </svg>
  );
});

export default PavoValue;
