

export default function BetaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="BETALayout">
      <div>{children}</div>
    </div>
  );
}