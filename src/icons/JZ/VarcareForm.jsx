import React from 'react';

export const iconData = {
  "id": "VarcareForm",
  "name": "VarcareForm",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.38 15.31 L 11.13 20.04 L 4.09 13.66 L 7.98 4.99 L 17.43 6.01 Z"
      }
    ]
  ]
};

export const VarcareForm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.38 15.31 L 11.13 20.04 L 4.09 13.66 L 7.98 4.99 L 17.43 6.01 Z" />
      {children}
    </svg>
  );
});

export default VarcareForm;
