import Image from "next/image";
import { db } from "~/server/prisma/db";

export const dynamic = "force-dynamic";

interface ImageSchema {
  id: string;
  url: string;
  name: string;
}

export default async function Home() {
  const images: ImageSchema[] = await db.t3gallery_Image.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images, ...images, ...images].map(
        (data, idx) => (
          <div key={data.id + idx.toString()} className="w-48 flex flex-col">
            <Image src={data.url} alt="image" width={200} height={200} />
            <div>{data.name}</div>
          </div>
        )
      )}
    </div>
  );
}
