interface SubnameLayoutProps {
  params: { subname: string };
  children: React.ReactNode;
}

export const revalidate = 6000;

export const dynamic = "force-static";

export const fetchCache = "only-cache";

const SubnameLayout = ({ children }: SubnameLayoutProps) => {
  return <div>{children}</div>;
};

export async function generateStaticParams() {
  return [];
}

export default SubnameLayout;