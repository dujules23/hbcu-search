import DefaultLayout from "@/components/layout/DefaultLayout";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import School from "../../models/schoolSchema";
import dbConnect from "../../lib/dbConnect";
import { trimSchoolText } from "../../utils/helper";

// interface Props {
//   name?: string;
//   desc?: string;
// }

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SchoolPage: NextPage<Props> = ({ school }) => {
  const { id, name, link, location, specialization, description, image, slug } =
    school;

  console.log(school);
  return <DefaultLayout>School Page</DefaultLayout>;
};

export default SchoolPage;

// setup up get StaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await dbConnect();
    const schools = await School.find().select("name");
    // console.log(schools);
    const paths = schools.map(({ name }) => ({
      params: {
        name: trimSchoolText(name).toLocaleString(),
      },
    }));
    // console.log(paths);
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.log("Not getting static paths", error);
    return {
      paths: [{ params: { name: "/" } }],
      fallback: false,
    };
  }
};

interface StaticPropsResponse {
  school: {
    id: string;
    name: string;
    link: string;
    location: string;
    specialization: string;
    description: string;
    image: string;
    slug: string;
  };
}

export const getStaticProps: GetStaticProps<
  StaticPropsResponse,
  { name: string }
> = async ({ params }) => {
  try {
    await dbConnect();
    const school = await School.findOne({ name: params?.name });
    console.log(school);
    if (!school) return { notFound: true };

    const {
      _id,
      name,
      link,
      location,
      specialization,
      description,
      image,
      slug,
    } = school;

    return {
      props: {
        school: {
          id: _id.toString(),
          name,
          link,
          location,
          specialization,
          description,
          image,
          slug,
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log("Static props not working correctly", error);
    return {
      notFound: true,
    };
  }
};
