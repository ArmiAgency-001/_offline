

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark">
      <div>{children}</div>
    </div>
  );
}