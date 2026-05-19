import React from 'react';

export const iconData = {
  "id": "VeraceGrove",
  "name": "VeraceGrove",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.39 5.02 L 18.98 6.39 L 17.61 18.98 L 5.02 17.61 Z"
      }
    ]
  ]
};

export const VeraceGrove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.39 5.02 L 18.98 6.39 L 17.61 18.98 L 5.02 17.61 Z" />
      {children}
    </svg>
  );
});

export default VeraceGrove;
