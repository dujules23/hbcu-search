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
import { parseAddress, trimSchoolText } from "../../utils/helper";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageContent from "@/components/common/PageContent";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import { ChangeEventHandler, useEffect, useState } from "react";
import ImageSelect from "@/components/image/ImageSelect";
import AddImageForm from "@/app/schools/AddImageForm";
import { SchoolLoadingSkeleton } from "@/components/common/SchoolLoadingSkeleton";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const SchoolPage: NextPage<Props> = ({ school }) => {
  const [loading, setLoading] = useState(true);
  const { id, name, link, location, type, image } = school;

  const router = useRouter();

  useEffect(() => {
    // Simulate a delay to demonstrate client-side hydration
    const timer = setTimeout(() => setLoading(false), 500); // Adjust time as needed
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return (
      <DefaultLayout>
        <SchoolLoadingSkeleton />
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <PageContent>
        <div className="flex justify-center m-4 items-center">
          <Card className="w-[550px] p-4 rounded shadow-lg">
            <CardHeader className="items-center">
              <CardTitle className="mb-12 font-bold">{name}</CardTitle>
              {/* <ImageSelect /> */}
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                {image ? (
                  <img className="w-full " src={image} />
                ) : (
                  // <Image alt="school" src={image} fill={true} />
                  <div className="border p-4 mb-4">No Image</div>
                )}
                <p>{parseAddress(location)}</p>
                <p>{type}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center space-x-5 mt-10">
              <a
                className="hover:underline"
                href={`//${link}`}
                target="_blank"
                rel="noreferrer"
              >
                Visit School
              </a>
              <Button
                className="justify-center border hover:bg-nav-primary hover:text-light-primary"
                onClick={() => router.push("/SchoolSearch")}
              >
                Back
              </Button>
              {/* <ImageSelect /> */}
            </CardFooter>
          </Card>
        </div>
      </PageContent>
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
    type: string;
    image?: string;
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

    const { _id, name, link, location, slug, type, image } = school;

    return {
      props: {
        school: {
          id: _id.toString(),
          name,
          link,
          location,
          slug,
          type,
          image: image || "",
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
