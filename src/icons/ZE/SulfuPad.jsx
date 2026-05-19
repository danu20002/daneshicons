import React from 'react';

export const iconData = {
  "id": "SulfuPad",
  "name": "SulfuPad",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.38 14.58 L 10.84 16.63 L 9.43 16.30 L 8.71 16.48 L 6.42 16.07 L 8.29 14.94 L 6.28 14.51 L 6.15 17.36 L 7.24 16.87 L 7.18 18.99 L 8.24 16.27 L 6.77 16.20 L 9.43 16.72 L 6.72 18.52 L 7.07 20.39 L 8.46 21.43 L 7.30 21.04 L 9.72 19.25 L 8.53 16.83 L 6.83 13.99 L 5.18 11.49 L 6.27 13.33 L 7.26 11.39 L 8.37 12.89 L 8.42 11.20 L 6.24 11.37 L 7.69 13.84"
      }
    ]
  ]
};

export const SulfuPad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.38 14.58 L 10.84 16.63 L 9.43 16.30 L 8.71 16.48 L 6.42 16.07 L 8.29 14.94 L 6.28 14.51 L 6.15 17.36 L 7.24 16.87 L 7.18 18.99 L 8.24 16.27 L 6.77 16.20 L 9.43 16.72 L 6.72 18.52 L 7.07 20.39 L 8.46 21.43 L 7.30 21.04 L 9.72 19.25 L 8.53 16.83 L 6.83 13.99 L 5.18 11.49 L 6.27 13.33 L 7.26 11.39 L 8.37 12.89 L 8.42 11.20 L 6.24 11.37 L 7.69 13.84" />
      {children}
    </svg>
  );
});

export default SulfuPad;
