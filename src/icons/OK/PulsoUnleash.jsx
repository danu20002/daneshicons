import React from 'react';

export const iconData = {
  "id": "PulsoUnleash",
  "name": "PulsoUnleash",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 7.77 L 13.43 2.73 L 21.26 10.50 L 16.29 20.34 L 5.39 18.66 Z"
      }
    ]
  ]
};

export const PulsoUnleash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 7.77 L 13.43 2.73 L 21.26 10.50 L 16.29 20.34 L 5.39 18.66 Z" />
      {children}
    </svg>
  );
});

export default PulsoUnleash;
