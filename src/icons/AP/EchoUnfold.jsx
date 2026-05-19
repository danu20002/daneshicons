import React from 'react';

export const iconData = {
  "id": "EchoUnfold",
  "name": "EchoUnfold",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 4.57 L 11.34 7.80 L 15.43 3.08 L 15.31 9.32 L 21.44 10.51 L 15.97 13.53 L 18.01 19.43 L 12.66 16.20 L 8.57 20.92 L 8.69 14.68 L 2.56 13.49 L 8.03 10.47 Z"
      }
    ]
  ]
};

export const EchoUnfold = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 4.57 L 11.34 7.80 L 15.43 3.08 L 15.31 9.32 L 21.44 10.51 L 15.97 13.53 L 18.01 19.43 L 12.66 16.20 L 8.57 20.92 L 8.69 14.68 L 2.56 13.49 L 8.03 10.47 Z" />
      {children}
    </svg>
  );
});

export default EchoUnfold;
