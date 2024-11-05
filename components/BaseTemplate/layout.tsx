export const BaseTemplateLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 pb-8">
      <div className="px-4 md:px-32 lg:px-64">{children}</div>
    </div>
  );
};
