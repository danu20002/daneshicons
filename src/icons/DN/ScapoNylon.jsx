import React from 'react';

export const iconData = {
  "id": "ScapoNylon",
  "name": "ScapoNylon",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.69 2.17 L 12.53 8.77 L 17.32 3.42 L 14.66 10.09 L 21.83 9.69 L 15.23 12.53 L 20.58 17.32 L 13.91 14.66 L 14.31 21.83 L 11.47 15.23 L 6.68 20.58 L 9.34 13.91 L 2.17 14.31 L 8.77 11.47 L 3.42 6.68 L 10.09 9.34 Z"
      }
    ]
  ]
};

export const ScapoNylon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.69 2.17 L 12.53 8.77 L 17.32 3.42 L 14.66 10.09 L 21.83 9.69 L 15.23 12.53 L 20.58 17.32 L 13.91 14.66 L 14.31 21.83 L 11.47 15.23 L 6.68 20.58 L 9.34 13.91 L 2.17 14.31 L 8.77 11.47 L 3.42 6.68 L 10.09 9.34 Z" />
      {children}
    </svg>
  );
});

export default ScapoNylon;
