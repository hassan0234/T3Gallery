import Image from "next/image";
import { db } from "~/server/prisma/db";
const mockImages = [
  "https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
  "https://utfs.io/f/93fe9634-fea2-4314-956b-7ae7f700ae5b-qa0vsq.png",
  "https://utfs.io/f/c494ae05-dd1a-459a-b09d-bbe37a140853-qikpqu.1.png",
];

interface ImageSchema {
  id: string;
  url: string;
}

const mockData: ImageSchema[] = mockImages.map(
  (image: string, index: number) => ({
    id: index.toString() + index.toString(),
    url: image,
  })
);

export default async function Home() {
  const images = await db.t3gallery_Image.findMany();
  console.log(images);
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-3">
        {images.map((image) => (
          <div key={image.id}>{image.url}</div>
        ))}
      </div>
      {[...mockData, ...mockData, ...mockData, ...mockData].map((data, idx) => (
        <div key={data.id + idx.toString()} className="w-48">
          <Image src={data.url} alt="image" width={200} height={200} />
        </div>
      ))}
    </div>
  );
}
