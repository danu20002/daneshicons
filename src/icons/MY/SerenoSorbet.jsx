import React from 'react';

export const iconData = {
  "id": "SerenoSorbet",
  "name": "SerenoSorbet",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.58 14.19 L 16.51 19.62 L 9.81 20.58 L 4.38 16.51 L 3.42 9.81 L 7.49 4.38 L 14.19 3.42 L 19.62 7.49 Z"
      }
    ]
  ]
};

export const SerenoSorbet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.58 14.19 L 16.51 19.62 L 9.81 20.58 L 4.38 16.51 L 3.42 9.81 L 7.49 4.38 L 14.19 3.42 L 19.62 7.49 Z" />
      {children}
    </svg>
  );
});

export default SerenoSorbet;
