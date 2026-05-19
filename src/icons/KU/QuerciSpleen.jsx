import React from 'react';

export const iconData = {
  "id": "QuerciSpleen",
  "name": "QuerciSpleen",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.88 7.12 L 20.31 13.42 L 16.88 18.88 L 10.58 20.31 L 5.12 16.88 L 3.69 10.58 L 7.12 5.12 L 13.42 3.69 Z"
      }
    ]
  ]
};

export const QuerciSpleen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.88 7.12 L 20.31 13.42 L 16.88 18.88 L 10.58 20.31 L 5.12 16.88 L 3.69 10.58 L 7.12 5.12 L 13.42 3.69 Z" />
      {children}
    </svg>
  );
});

export default QuerciSpleen;
