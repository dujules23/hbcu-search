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
import Link from "next/link";
import { Button } from "@/components/ui/button";

// interface Props {
//   name?: string;
//   desc?: string;
// }

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SchoolPage: NextPage<Props> = ({ school }) => {
  const { id, name, link, location, slug } = school;

  return (
    <DefaultLayout>
      <div className="">
        <div className="flex justify-center p-8 space-x-6">
          {/* School Card */}
          <div className="bg-white text-gray-400 text-xl rounded p-8 w-1/3 h-52">
            <div>{name}</div>
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              href={`//${link}`}
            >
              Visit School
            </a>
          </div>
          {/* Info Card  */}
          <div>{location}</div>
        </div>
        <div className="flex justify-center border mb-4 w-12">
          <Button size="default">Back</Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SchoolPage;

// setup up get StaticProps
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    await dbConnect();
    const schools = await School.find().select("slug");
    const paths = schools.map(({ slug }) => ({
      params: {
        slug: trimSchoolText(slug).toLocaleString(),
      },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.log("Not getting static paths", error);
    return {
      paths: [{ params: { slug: "/" } }],
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
    slug: string;
  };
}

export const getStaticProps: GetStaticProps<
  StaticPropsResponse,
  { slug: string }
> = async ({ params }) => {
  try {
    await dbConnect();
    const school = await School.findOne({ slug: params?.slug });
    if (!school) return { notFound: true };

    const { _id, name, link, location, slug } = school;

    return {
      props: {
        school: {
          id: _id.toString(),
          name,
          link,
          location,
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
