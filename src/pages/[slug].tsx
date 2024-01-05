import DefaultLayout from "@/components/layout/DefaultLayout";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import School from "../../models/schoolSchema";
import dbConnect from "../../lib/dbConnect";

// interface Props {
//   name?: string;
//   desc?: string;
// }

type Props = {
  name: string;
  desc: string;
};

const SchoolPage: NextPage<Props> = ({ name, desc }) => {
  return <DefaultLayout>School Page</DefaultLayout>;
};

export default SchoolPage;

// // setup up get StaticProps
// export const getStaticPaths: GetStaticPaths = async () => {
//   try {
//     const schools = await School.find().select("name");
//     console.log(schools);
//     const paths = schools.map(({ slug }) => ({
//       params: {
//         slug,
//       },
//     }));
//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       paths: [{ params: { slug: "/" } }],
//       fallback: false,
//     };
//   }
// };

// interface StaticPropsResponse {
//   school: {
//     id: string;
//     name: string;
//     link: string;
//     location: string;
//     specialization: string;
//     description: string;
//     image: string;
//     slug: string;
//   };
// }

// export const getStaticProps: GetStaticProps<
//   StaticPropsResponse,
//   { slug: string }
// > = async ({ params }) => {
//   try {
//     await dbConnect();
//     const school = await School.findOne({ name: params?.slug });
//     console.log(school);
//     if (!school) return { notFound: true };

//     const {
//       _id,
//       name,
//       link,
//       location,
//       specialization,
//       description,
//       image,
//       slug,
//     } = school;

//     return {
//       props: {
//         school: {
//           id: _id.toString(),
//           name,
//           link,
//           location,
//           specialization,
//           description,
//           image,
//           slug,
//         },
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       notFound: true,
//     };
//   }
// };
