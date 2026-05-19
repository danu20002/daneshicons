import React from 'react';

export const iconData = {
  "id": "UliginoVault",
  "name": "UliginoVault",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.05 5.20 C 9.06 14.72, 14.19 5.17, 18.21 18.53"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 5.27 C 12.69 7.85, 10.83 8.11, 20.00 18.19"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 6.30 C 13.69 5.67, 17.72 10.38, 16.59 21.71"
      }
    ],
    [
      "path",
      {
        "d": "M 9.93 4.04 C 7.30 16.69, 8.80 13.37, 18.30 15.88"
      }
    ]
  ]
};

export const UliginoVault = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.05 5.20 C 9.06 14.72, 14.19 5.17, 18.21 18.53" />
      <path d="M 9.43 5.27 C 12.69 7.85, 10.83 8.11, 20.00 18.19" />
      <path d="M 3.38 6.30 C 13.69 5.67, 17.72 10.38, 16.59 21.71" />
      <path d="M 9.93 4.04 C 7.30 16.69, 8.80 13.37, 18.30 15.88" />
      {children}
    </svg>
  );
});

export default UliginoVault;
