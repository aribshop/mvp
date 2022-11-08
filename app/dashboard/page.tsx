import Link from "next/link";
import { redirect } from "next/navigation";
import { FunctionComponent } from "react";
import Website from "../../core/types/business/website";
import { DB } from "../../repositories/firestore";

interface DashboardProps {}

const Dashboard = async (props: DashboardProps) => {
  const { websites } = (await (
    await fetch("http://127.0.0.1:3000/api/website/get")
  ).json()) as { websites: Website[] };

  if (!websites.length) return redirect("/dashboard/new");

  return (
    <div>
      <h1>Hello Nabil!</h1>

      <h2>Please select a website</h2>

      <div className="flex justify-between ">
        {websites.map((website) => (
          <Link href={`/dashboard/${website.id}`}>{website.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
