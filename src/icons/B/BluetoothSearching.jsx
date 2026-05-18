import React from 'react';

export const iconData = {
  id: "BluetoothSearching",
  name: "BluetoothSearching",
  category: "B",
  nodes: [["path",{"d":"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{"d":"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{"d":"M18 12h.01"}]]
};

export const BluetoothSearching = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
      <path d="M18 12h.01" />
      {children}
    </svg>
  );
});

export default BluetoothSearching;
