import Main2Layout from "@/components/common/layout/main2";
import Detail from "@/components/details/detail";

export interface IDetailPageProps {}

function DetailPage(props: IDetailPageProps) {
  return <Detail />;
}
DetailPage.Layout = Main2Layout;
export default DetailPage;
