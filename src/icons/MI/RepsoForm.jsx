import React from 'react';

export const iconData = {
  "id": "RepsoForm",
  "name": "RepsoForm",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.91 3.04 L 14.95 6.97 L 22.31 12.08 L 14.88 17.07 L 6.78 20.89 L 6.17 11.96 Z"
      }
    ]
  ]
};

export const RepsoForm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.91 3.04 L 14.95 6.97 L 22.31 12.08 L 14.88 17.07 L 6.78 20.89 L 6.17 11.96 Z" />
      {children}
    </svg>
  );
});

export default RepsoForm;
