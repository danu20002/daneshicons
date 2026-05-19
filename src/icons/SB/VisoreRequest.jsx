import React from 'react';

export const iconData = {
  "id": "VisoreRequest",
  "name": "VisoreRequest",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.65 4.27 L 16.02 3.50 L 21.37 11.23 L 17.35 19.73 L 7.98 20.50 L 2.63 12.77 Z"
      }
    ]
  ]
};

export const VisoreRequest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.65 4.27 L 16.02 3.50 L 21.37 11.23 L 17.35 19.73 L 7.98 20.50 L 2.63 12.77 Z" />
      {children}
    </svg>
  );
});

export default VisoreRequest;
