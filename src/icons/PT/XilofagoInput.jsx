import React from 'react';

export const iconData = {
  "id": "XilofagoInput",
  "name": "XilofagoInput",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 5.58 L 20.72 5.58 L 20.72 18.42 L 3.28 18.42 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.28 5.58 L 7.39 1.46 L 24.84 1.46 L 20.72 5.58"
      }
    ],
    [
      "path",
      {
        "d": "M 20.72 5.58 L 24.84 1.46 L 24.84 14.30 L 20.72 18.42"
      }
    ]
  ]
};

export const XilofagoInput = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 5.58 L 20.72 5.58 L 20.72 18.42 L 3.28 18.42 Z" />
      <path d="M 3.28 5.58 L 7.39 1.46 L 24.84 1.46 L 20.72 5.58" />
      <path d="M 20.72 5.58 L 24.84 1.46 L 24.84 14.30 L 20.72 18.42" />
      {children}
    </svg>
  );
});

export default XilofagoInput;
