import React from 'react';

export const iconData = {
  "id": "SynoSponge",
  "name": "SynoSponge",
  "category": "QE",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.85 L 2.50 11.60 L 3.00 13.91 L 3.50 13.91 L 4.00 11.60 L 4.50 7.85 L 5.00 4.11 L 5.50 1.79 L 6.00 1.79 L 6.50 4.11 L 7.00 7.85 L 7.50 11.60 L 8.00 13.91 L 8.50 13.91 L 9.00 11.60 L 9.50 7.85 L 10.00 4.11 L 10.50 1.79 L 11.00 1.79 L 11.50 4.11 L 12.00 7.85 L 12.50 11.60 L 13.00 13.91 L 13.50 13.91 L 14.00 11.60 L 14.50 7.85 L 15.00 4.11 L 15.50 1.79 L 16.00 1.79 L 16.50 4.11 L 17.00 7.85 L 17.50 11.60 L 18.00 13.91 L 18.50 13.91 L 19.00 11.60 L 19.50 7.85 L 20.00 4.11 L 20.50 1.79 L 21.00 1.79 L 21.50 4.11 L 22.00 7.85"
      }
    ]
  ]
};

export const SynoSponge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.85 L 2.50 11.60 L 3.00 13.91 L 3.50 13.91 L 4.00 11.60 L 4.50 7.85 L 5.00 4.11 L 5.50 1.79 L 6.00 1.79 L 6.50 4.11 L 7.00 7.85 L 7.50 11.60 L 8.00 13.91 L 8.50 13.91 L 9.00 11.60 L 9.50 7.85 L 10.00 4.11 L 10.50 1.79 L 11.00 1.79 L 11.50 4.11 L 12.00 7.85 L 12.50 11.60 L 13.00 13.91 L 13.50 13.91 L 14.00 11.60 L 14.50 7.85 L 15.00 4.11 L 15.50 1.79 L 16.00 1.79 L 16.50 4.11 L 17.00 7.85 L 17.50 11.60 L 18.00 13.91 L 18.50 13.91 L 19.00 11.60 L 19.50 7.85 L 20.00 4.11 L 20.50 1.79 L 21.00 1.79 L 21.50 4.11 L 22.00 7.85" />
      {children}
    </svg>
  );
});

export default SynoSponge;
