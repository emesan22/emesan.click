import Title from "./titile.component";

export default function PageBase({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <article>
      <div className="h-[5rem]"></div>
      <Title title={title} />
      {children}
    </article>
  );
}
