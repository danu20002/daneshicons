import React from 'react';

export const iconData = {
  id: "Plug2",
  name: "Plug2",
  category: "P",
  nodes: [["path",{"d":"M9 2v6"}],["path",{"d":"M15 2v6"}],["path",{"d":"M12 17v5"}],["path",{"d":"M5 8h14"}],["path",{"d":"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]]
};

export const Plug2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M12 17v5" />
      <path d="M5 8h14" />
      <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
      {children}
    </svg>
  );
});

export default Plug2;
