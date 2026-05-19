import React from 'react';

export const iconData = {
  "id": "SagittaRash",
  "name": "SagittaRash",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 18.39 L 21.24 18.10 L 18.68 19.14 L 17.79 18.31 L 17.97 18.15 L 17.96 15.47 L 18.79 14.10 L 16.60 11.47 L 17.26 11.85 L 18.43 10.54 L 19.91 13.19 L 19.90 15.39 L 20.12 14.65 L 22.42 13.33 L 20.38 15.53 L 21.12 16.97 L 18.14 14.61 L 15.71 12.62 L 12.90 14.56 L 14.63 15.49 L 13.49 18.40 L 16.44 18.32 L 15.26 19.51 L 17.16 20.30 L 16.67 19.98 L 14.87 19.31 L 14.50 18.48 L 13.46 16.77 L 15.75 15.12 L 16.98 12.98 L 14.49 14.07 L 12.85 13.41 L 10.04 16.24 L 9.82 17.41 L 10.43 14.62 L 12.71 12.17"
      }
    ]
  ]
};

export const SagittaRash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 18.39 L 21.24 18.10 L 18.68 19.14 L 17.79 18.31 L 17.97 18.15 L 17.96 15.47 L 18.79 14.10 L 16.60 11.47 L 17.26 11.85 L 18.43 10.54 L 19.91 13.19 L 19.90 15.39 L 20.12 14.65 L 22.42 13.33 L 20.38 15.53 L 21.12 16.97 L 18.14 14.61 L 15.71 12.62 L 12.90 14.56 L 14.63 15.49 L 13.49 18.40 L 16.44 18.32 L 15.26 19.51 L 17.16 20.30 L 16.67 19.98 L 14.87 19.31 L 14.50 18.48 L 13.46 16.77 L 15.75 15.12 L 16.98 12.98 L 14.49 14.07 L 12.85 13.41 L 10.04 16.24 L 9.82 17.41 L 10.43 14.62 L 12.71 12.17" />
      {children}
    </svg>
  );
});

export default SagittaRash;
