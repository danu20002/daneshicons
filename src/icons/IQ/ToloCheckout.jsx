import React from 'react';

export const iconData = {
  "id": "ToloCheckout",
  "name": "ToloCheckout",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.52 12.36 L 9.29 10.57 L 6.95 3.97 L 11.88 8.94 L 16.43 3.61 L 14.59 10.37 L 21.48 11.64 L 14.71 13.43 L 17.05 20.03 L 12.12 15.06 L 7.57 20.39 L 9.41 13.63 Z"
      }
    ]
  ]
};

export const ToloCheckout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.52 12.36 L 9.29 10.57 L 6.95 3.97 L 11.88 8.94 L 16.43 3.61 L 14.59 10.37 L 21.48 11.64 L 14.71 13.43 L 17.05 20.03 L 12.12 15.06 L 7.57 20.39 L 9.41 13.63 Z" />
      {children}
    </svg>
  );
});

export default ToloCheckout;
