export default function RecentBlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="py-20">
      <div>
        <h1 className="title-text py-4 bg-accent text-center rounded-lg capitalize">
          Latest Blogs
        </h1>
        {children}
      </div>
    </section>
  )
}
