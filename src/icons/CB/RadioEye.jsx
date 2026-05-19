import React from 'react';

export const iconData = {
  "id": "RadioEye",
  "name": "RadioEye",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 18.23 L 6.97 11.42 L 5.77 4.14 L 12.58 6.97 L 19.86 5.77 L 17.03 12.58 L 18.23 19.86 L 11.42 17.03 Z"
      }
    ]
  ]
};

export const RadioEye = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 18.23 L 6.97 11.42 L 5.77 4.14 L 12.58 6.97 L 19.86 5.77 L 17.03 12.58 L 18.23 19.86 L 11.42 17.03 Z" />
      {children}
    </svg>
  );
});

export default RadioEye;
