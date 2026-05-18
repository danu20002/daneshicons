import React from 'react';

export const iconData = {
  id: "ClockAlert",
  name: "ClockAlert",
  category: "C",
  nodes: [["path",{"d":"M12 6v6l4 2"}],["path",{"d":"M20 12v5"}],["path",{"d":"M20 21h.01"}],["path",{"d":"M21.25 8.2A10 10 0 1 0 16 21.16"}]]
};

export const ClockAlert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 6v6l4 2" />
      <path d="M20 12v5" />
      <path d="M20 21h.01" />
      <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
      {children}
    </svg>
  );
});

export default ClockAlert;
