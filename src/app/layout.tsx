import "../styles/globals.scss";
import SideLayout from "@/components/SideLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SideLayout>{children}</SideLayout>
      </body>
    </html>
  );
}
