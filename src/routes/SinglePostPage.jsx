import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            consequatur.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link to="/" className="text-blue-800">
              John Doe
            </Link>
            <span>on</span>
            <Link to="/" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            cumque illo, vero laborum saepe maxime. Vel vitae tenetur non
            aliquam exercitationem consectetur voluptatum ab soluta velit eum,
            rem assumenda aut!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quia
            non est enim officiis, natus, pariatur doloribus odit optio atque
            illo dignissimos placeat nesciunt ex consequatur laboriosam
            recusandae voluptatum molestias dolores obcaecati culpa inventore
            autem sit eos. Molestias, alias quasi totam nemo fugit quos nobis
            labore iste quam explicabo in eius! Dolor aut quibusdam, officiis
            qui illo quis praesentium veniam expedita magni cupiditate.
            Eligendi, unde rerum quo recusandae deleniti porro facilis velit sed
            excepturi nihil cumque, laborum iure accusamus voluptate!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link to="/" className="text-blue-800">
                John Doe
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis, atque!
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="underline">
              All
            </Link>
            <Link to="/" className="underline">
              Web Design
            </Link>
            <Link to="/" className="underline">
              Development
            </Link>
            <Link to="/" className="underline">
              Databases
            </Link>
            <Link to="/" className="underline">
              Search Engines
            </Link>
            <Link to="/" className="underline">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
