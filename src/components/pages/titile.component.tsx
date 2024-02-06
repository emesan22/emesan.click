export default function Title({ title }: { title: string }) {
  return (
    <div className="h-[25vh] dark:bg-neutral-800 bg-neutral-100 grid grid-cols-10 grid-rows-3 font-bold">
      <h1 className="text-4xl xl:text-5xl row-start-2 row-span-1 col-start-2 col-span-8 my-auto">
        {title}
      </h1>
    </div>
  );
}
