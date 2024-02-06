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
      <div className="h-[5rem] xl:h-[2.5rem]"></div>
      <Title title={title} />
      <div className="px-7 pt-3 xl:pl-44 text-xl main-content">{children}</div>
    </article>
  );
}
