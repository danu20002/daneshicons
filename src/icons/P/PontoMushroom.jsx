import React from 'react';

export const iconData = {
  "id": "PontoMushroom",
  "name": "PontoMushroom",
  "category": "P",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.08 7.73 L 19.56 8.32 L 17.56 10.89 L 19.96 11.96 L 22.67 10.88 L 23.00 10.78 L 22.58 11.58 L 23.00 11.94 L 23.00 9.95 L 23.00 11.49 L 23.00 8.75 L 21.70 9.51 L 23.00 10.69 L 23.00 7.88 L 23.00 8.52 L 22.63 7.97 L 22.00 8.75 L 22.84 10.65 L 22.25 11.89 L 23.00 13.07 L 22.79 11.56 L 21.53 14.03 L 20.36 11.25 L 17.61 12.71 L 19.88 14.60 L 17.07 15.24 L 19.44 13.44 L 18.49 14.07"
      }
    ]
  ]
};

export const PontoMushroom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.08 7.73 L 19.56 8.32 L 17.56 10.89 L 19.96 11.96 L 22.67 10.88 L 23.00 10.78 L 22.58 11.58 L 23.00 11.94 L 23.00 9.95 L 23.00 11.49 L 23.00 8.75 L 21.70 9.51 L 23.00 10.69 L 23.00 7.88 L 23.00 8.52 L 22.63 7.97 L 22.00 8.75 L 22.84 10.65 L 22.25 11.89 L 23.00 13.07 L 22.79 11.56 L 21.53 14.03 L 20.36 11.25 L 17.61 12.71 L 19.88 14.60 L 17.07 15.24 L 19.44 13.44 L 18.49 14.07" />
      {children}
    </svg>
  );
});

export default PontoMushroom;
