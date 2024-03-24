import React from "react";
import Link from "next/link";
import Image from "next/image";
import image from "../../../public/images/hero.jpg";
import { AspectRatio } from "../ui/aspect-ratio";

type BlogListProps = {
  title: string;
  category: string;
  author: string;
  uploadDate: string;
};

const BlogList: React.FC<BlogListProps> = ({
  title,
  category,
  author,
  uploadDate,
}) => (
  <div key={title} className="flex flex-row gap-4 rounded-lg shadow-md">
    <div className="w-full md:w-2/5">
      <AspectRatio ratio={4 / 3}>
        <Image
          src={image}
          alt="Blog Post Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="darker-shade"></div>
      </AspectRatio>
    </div>
    <div className="flex flex-col justify-center gap-2 text-muted-foreground text-sm">
      <Link href="" className="uppercase font-bold hover:text-blue-500">
        {category}
      </Link>
      <h4 className="text-lg text-primary">{title}</h4>
      <div>Uploaded on: {uploadDate}</div>
      <div className="font-bold">Author: {author}</div>
    </div>
  </div>
);

export default BlogList;
