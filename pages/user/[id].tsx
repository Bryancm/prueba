import { useState, useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import { PhoneIcon, MailIcon, CakeIcon, LocationMarkerIcon, UserCircleIcon } from "@heroicons/react/outline";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostList from "../../components/Post/PostList";

import { fetchUserPosts, fetchUserProfile } from "../../api/user";
import { PostsResponse, User } from "../../types";
import { capitalize } from "../../util/string";
import { formatBirthday } from "../../util/date";

interface Props {
  user: User;
  postsResponse: PostsResponse;
}

const UserProfile: NextPage<Props> = ({ user, postsResponse }) => {
  const name = capitalize(`${user.title} ${user.firstName} ${user.lastName}`);
  const gender = capitalize(user.gender);
  const birthday = formatBirthday(new Date(user.dateOfBirth));
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    setOpacity("opacity-100");
  }, []);

  return (
    <div className="bg-slate-50 p-4 sm:p-8">
      <Head>
        <title>User Profile - Prueba - misfans</title>
        <meta name="User Profile Prueba para misfans" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`transition-opacity duration-300 ease-in ${opacity}`}>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col p-2 sm:p-4">
            <div className="flex flex-row justify-center items-center flex-wrap p-2">
              <Image className="rounded-full" layout="fixed" src={user.picture} width={180} height={180} quality={100} />
              <div className="flex flex-col justify-between p-1 sm:p-6">
                <div className="m-3">
                  <h1 className="text-4xl text-gray-800 font-bold my-1">{name}</h1>
                  <p className="text-sm text-gray-400">{user.id}</p>
                </div>
                <div className="flex flex-row text-gray-400">
                  <div className="flex flex-row m-1 items-center">
                    <CakeIcon className="h-5 w-5  mx-1" />
                    <p className="text-sm ">{birthday}</p>
                  </div>
                  <div className="flex flex-row m-1 items-center">
                    <UserCircleIcon className="h-5 w-5  mx-1" />
                    <p className="text-sm t">{gender}</p>
                  </div>
                  <div className="flex flex-row m-1 items-center">
                    <LocationMarkerIcon className="h-5 w-5  mx-1" />
                    <p className="text-sm ">{user.location.country}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center py-1 sm:py-4">
              <a
                href={`mailto: ${user.email}`}
                className="flex flex-row m-1 items-center transition ease-in duration-200 text-yellow-600 hover:text-yellow-700 ">
                <MailIcon className="h-5 w-5 mx-1" />
                <p className="text-sm ">{user.email}</p>
              </a>
              <a
                href={`tel:${user.phone}`}
                className="flex flex-row m-1 items-center transition ease-in duration-200 text-yellow-600 hover:text-yellow-700">
                <PhoneIcon className="h-5 w-" />
                <p className="text-sm">${user.phone}</p>
              </a>
            </div>
          </div>
          <PostList postsResponse={postsResponse} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const user = await fetchUserProfile(query?.id);
    const postsResponse = await fetchUserPosts(query?.id);
    if (user.error || postsResponse.error) throw new Error(user.error || postsResponse.error);
    return {
      props: { user, postsResponse },
    };
  } catch (e) {
    console.log("FETCH_USER_PROFILE_ERROR: ", e);
    return {
      redirect: {
        destination: "/notFound",
        permanent: false,
      },
    };
  }
};

export default UserProfile;
