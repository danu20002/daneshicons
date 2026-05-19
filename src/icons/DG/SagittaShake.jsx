import React from 'react';

export const iconData = {
  "id": "SagittaShake",
  "name": "SagittaShake",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.32 20.25 L 20.63 17.75 L 18.78 19.07 L 20.18 16.58 L 20.41 17.76 L 21.83 16.87 L 22.98 19.30 L 22.25 18.98 L 21.42 20.25 L 20.73 18.69 L 20.77 19.80 L 22.08 16.99 L 22.33 17.43 L 21.57 16.50 L 20.58 19.07 L 21.17 18.31 L 22.59 16.01 L 23.00 18.18 L 20.36 20.65 L 20.55 22.59 L 19.24 22.17 L 16.39 23.00 L 16.89 23.00 L 19.70 23.00 L 21.99 23.00 L 20.67 23.00 L 23.00 20.33 L 23.00 19.31 L 22.90 19.08 L 22.99 20.44"
      }
    ]
  ]
};

export const SagittaShake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.32 20.25 L 20.63 17.75 L 18.78 19.07 L 20.18 16.58 L 20.41 17.76 L 21.83 16.87 L 22.98 19.30 L 22.25 18.98 L 21.42 20.25 L 20.73 18.69 L 20.77 19.80 L 22.08 16.99 L 22.33 17.43 L 21.57 16.50 L 20.58 19.07 L 21.17 18.31 L 22.59 16.01 L 23.00 18.18 L 20.36 20.65 L 20.55 22.59 L 19.24 22.17 L 16.39 23.00 L 16.89 23.00 L 19.70 23.00 L 21.99 23.00 L 20.67 23.00 L 23.00 20.33 L 23.00 19.31 L 22.90 19.08 L 22.99 20.44" />
      {children}
    </svg>
  );
});

export default SagittaShake;
