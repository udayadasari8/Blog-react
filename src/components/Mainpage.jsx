import React from 'react';
import { Link } from 'react-router-dom';

export const Mainpage = () => {
    const blogPosts = [
        {
            title: "Browns set to sign veteran QB Joe Flacco to practice squad",
            description: "By Michael Carter Young",
            image: "https://blogstorage.s3.amazonaws.com/uploads/cache/f2/0b/f20b0afd0fb1cb21eb09017d2501c5cd.jpg"
        },
        {
            title: "Trevon Diggs makes it clear that his brother, Stefon, should leave Buffalo!",
            description: "By SportsBlog News Desk",
            image: "https://blogstorage.s3.amazonaws.com/uploads/cache/3c/ef/3cef542ad277a34260804cc39be607c8.jpg",
        },
        {
            title: "Patriots Stock Report: 3 up, 3 down",
            description: "By Luke Ervin",
            image: "https://blogstorage.s3.amazonaws.com/uploads/cache/13/b1/13b1124281af41a191d4a568c555e003.jpg",
        },
        {
            title: "Rohit Sharma and Virat Kohli have been giants of Indian cricket – 2024 began with Sharma leading the team to their second World T20 title, and Kohli is comfortably placed among the all-time greats to have played the game.",
            description: "Will the new year begin with the passing of the old guard?",
            image: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2025/01/sports.png",
        },
        {
            title: "I do what I want,” Australian tennis player Nick Kyrgios said after breaking Wimbledon’s all-white rule with red trainers in 2022. ",
            description: "FIDE right on axing Carlsen from chess tournament. That said, dress codes are very silly ",
            image: "https://th.bing.com/th?id=OSK.HERODTFSeFF-rpr54K-3sxB-NJtdjLok_6E1sxb52jsXcmY&w=312&h=200&c=15&rs=2&o=6&oif=webp&pid=SANGAM",
        },
        {
            title: "India lost the recently concluded “pink-ball” test against Australia at the Adeliade Oval in the Border-Gavaskar Trophy, which enabled the Aussies to bounce back from a humiliating defeat in the first test at Perth",
            description: "India lost the recently concluded “pink-ball” test against Australia at the Adeliade Oval in the Border-Gavaskar Trophy, which enabled the Aussies to bounce back from a humiliating defeat in the first test at Perth",
            image: "https://th.bing.com/th/id/OIP._YuGqxYXN3b-U1p_w1VXzwAAAA?w=230&h=180&c=7&r=0&o=5&pid=1.7",
        },
    ];

    return (
        <>
            <div className="bg-black text-white">
                <div className="relative bg-black h-96 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold">Built for Blogs.</h1>
                    <p className="text-lg mt-2 opacity-80">The place to publish.</p>
                </div>
                <div className="bg-green-500 text-black py-12">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
                        <div>
                            <h2 className="text-2xl font-bold">A Powerful Platform</h2>
                            <p className="mt-2 text-sm">Design, build, and grow your blog. Set up in minutes.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Build Your Own Blog</h2>
                            <p className="mt-2 text-sm">Amplify your voice and build Blogs!</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Earn Knowledge by Referring</h2>
                            <p className="mt-2 text-sm">Blogs written by experts.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col p-6 w-full bg-gray-100 min-h-screen">
                <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Featured Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                        >
                        <Link to='/blogs'  > <img src= {post.image} alt={post.title} className="w-full h-48 object-cover" /> </Link>
                            <div className="p-5">
                                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                                <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-green-500 text-white py-12 text-center px-6">
                <p className="text-xl font-bold max-w-3xl mx-auto">"I've tried other blogging sites but Bloggers has the most features and the best UI I've ever experienced." - Uday D</p>
            </div>
            
            <div className="bg-white text-black py-12 text-center px-6">
                <p className="text-xl max-w-3xl mx-auto">Start publishing in minutes with the best platform for creators who want to blog.</p>
                <p>&copy; 2025 Uday D</p> 
            </div>
        </>
    );
};

export default Mainpage;
