import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineGif } from "react-icons/hi2"
import { BiHash } from "react-icons/bi";
import { RiNotification4Line, RiFileList2Line } from "react-icons/ri";
import { FaRegEnvelope, FaUserPlus, FaPoll } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { CiCircleMore, CiUser } from "react-icons/ci";
import { BsStars, BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import twitterlogo from "../../Images/twitterlogo.svg";
import { IoEarthOutline, IoLocationOutline } from 'react-icons/io5';
import { TbCalendarTime } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

import axios from 'axios';

import { useState } from "react";
export default function LoginUserHomepage() {
    const [TweetPrivacyButton, setTweetPrivacyButton] = useState({
        innerText: "Everyone",
    });


    const [ImagePreview, setImagePreview] = useState([]);
    const [TweetMedia, setTweetMedia] = useState({ twetText: '', tweetImages: [] })


    // for handle tweet image 
    function handleTweetImage(e) {
        if (e.target.files && e.target.files[0]) {
            const noOfFiles = e.target.files.length;
            for (let i = 0; i < noOfFiles; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImagePreview([...ImagePreview, e.target.result])
                }
                reader.readAsDataURL(e.target.files[i])
            }
        }










        // setImagePreview(URL.createObjectURL(e.target.files[0]));
        // console.log(e.target.files.length, "length");
        // let array = []
        // for (let i = 0; i < e.target.files.length; i++) {
        //     console.log("____________", URL.createObjectURL(e.target.files[i]))
        //     array.push(URL.createObjectURL(e.target.files[i]))
        //     // setImagePreview([...ImagePreview, URL.createObjectURL(e.target.files[i])]);
        //     // console.log("hello", i);
        //     // console.log(ImagePreview);
        // }
        // console.log(array)
        // setImagePreview([...(e.target.files)]);
        // setTweetMedia({ ...TweetMedia, tweetImages: [...(e.target.files)] })
        // console.log(e.target.files)
        // console.log(TweetMedia)
    }

    // Post Tweet 
    async function HandleTweeetClick() {

        console.log(ImagePreview);
        // const TweetImages = new FormData();
        // TweetImages.append('image', TweetMedia.tweetImages[0]);
        // console.log(TweetImages);
        // const ResData = await axios.post(`https://api.imgbb.com/1/upload?key=96ed12c35fb35708b25ac2dfc6781ebc`, TweetImages);
        // console.log(ResData.data.data.url.substring(17), "responsedata");
    }

    return (
        <>
            {/* for medium or large devices  */}

            <div className="flex">
                {/* left section  */}
                <section className="w-fit px-3 h-screen border border-black">
                    <div className="w-fit rounded-full p-2 hover:bg-blue-50">
                        <img src={twitterlogo} alt="" height="30px" width="30px" />
                    </div>
                    <div className="flex flex-col my-3">
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <HiOutlineHome className="text-2xl" />{" "}
                            <span className="text-xl">Home</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <BiHash className="text-2xl" />{" "}
                            <span className="text-xl">Explore</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <RiNotification4Line className="text-2xl" />{" "}
                            <span className="text-xl">Notifications</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <FaRegEnvelope className="text-2xl" />{" "}
                            <span className="text-xl">Messages</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <BsBookmark className="text-2xl" />{" "}
                            <span className="text-xl">bookmarks</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <RiFileList2Line className="text-2xl" />{" "}
                            <span className="text-xl">List</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <CiUser className="text-2xl" />{" "}
                            <span className="text-xl">Profile</span>
                        </div>
                        <div className="flex space-x-5 w-fit border rounded-full px-3 py-2 my-1 hover:bg-gray-200  ">
                            <CiCircleMore className="text-2xl" />{" "}
                            <span className="text-xl">More</span>
                        </div>
                    </div>
                    <div className="">
                        <button className="py-2 text-center font-semibold text-white rounded-full bg-blue-500 px-20  text-xl">
                            {" "}
                            Tweet
                        </button>
                    </div>
                    <div className="mt-auto">User Details</div>
                </section>
                {/* middle section  */}
                <section className="w-full border border-black mx-5 px-3 relative">
                    <div className="flex justify-between text-xl  py-2 ">
                        <span className="font-semibold">Home</span>
                        <span className="rounded-full  p-1.5 hover:bg-gray-100">
                            <BsStars />
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <div>
                            <div className="  text-white text-2xl text-center px-2.5 py-1  rounded-full bg-purple-700 ">
                                N
                            </div>
                        </div>
                        <div className="w-full ">
                            <div>
                                <div className="dropdown relative">
                                    <button
                                        className="rounded-full px-3  border  text-sm flex items-center space-x-2"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span>Everyone</span>{" "}
                                        <MdKeyboardArrowDown className="text-lg" />
                                    </button>
                                    <div
                                        className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2  rounded-xl shadow-md shadow-gray-600 mt-1 m-0"
                                        aria-labelledby="dropdownMenuButton1">
                                        <div className="text-xl font-semibold dropdown-item px-4">
                                            Choose audience
                                        </div>
                                        <div className="flex dropdown-item my-2 space-x-3 hover:bg-gray-50 px-4 py-1">
                                            <div className="bg-blue-500 rounded-full p-2 w-fit">
                                                <IoEarthOutline className='text-xl text-white bg-blue-500  ' />
                                            </div>
                                            <div className="font-semibold">
                                                Everyone
                                            </div>
                                        </div>
                                        <div className="flex dropdown-item my-2 space-x-3 px-4 hover:bg-gray-50  py-1">
                                            <div className="bg-green-500 rounded-full p-2 w-fit h-fit">
                                                <FaUserPlus className='text-xl text-white' />
                                            </div>
                                            <div>
                                                <div className="font-semibold">Twitter Circle</div>
                                                <div className="flex">
                                                    <p><strong>0 </strong> People</p>
                                                    <button className="rounded-full px-3 hover:bg-gray-200">
                                                        <span className="underline font-semibold">Edit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 ">
                                    <textarea name="" id="" rows={2} className="text-xl  w-full focus:outline-none" placeholder="What's heppening" />
                                    {/* <img src={ImagePreview} /> */}

                                    <div>

                                    </div>
                                </div>
                            </div>

                            <form className="flex border-t">
                                <div className="flex space-x-3 items-center  w-full py-3">
                                    <div className="text-lg p-2  rounded-full hover:bg-blue-50">
                                        <label htmlFor="TweetMediaImageInput">
                                            <BsCardImage className="text-blue-500" />
                                        </label>
                                        <input id="TweetMediaImageInput" accept="image/*" multiple className="hidden" type="file" onChange={e => { handleTweetImage(e) }} />
                                    </div>
                                    <div className="text-lg p-2  rounded-full hover:bg-blue-50">
                                        <HiOutlineGif className="text-blue-500" />
                                    </div>
                                    <div className="text-lg p-2  rounded-full hover:bg-blue-50">
                                        <FaPoll className="text-blue-500" />
                                    </div>
                                    <div className="text-lg p-2  rounded-full hover:bg-blue-50">
                                        <BsEmojiSmile className="text-blue-500" />
                                    </div>
                                    <div className="text-lg p-2  rounded-full hover:bg-blue-50">
                                        <TbCalendarTime className="text-blue-200" />
                                    </div>
                                    <div className="text-lg p-2  rounded-full hover:bg-blue-50">
                                        <IoLocationOutline className="text-blue-200" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 px-3">
                                    <div className=" p-1 border rounded-full hover:bg-blue-50">
                                        <AiOutlinePlus className="text-blue-600" />
                                    </div>
                                    <button className="rounded-full bg-blue-500 text-white px-3 py-1.5 font-semibold"
                                        onClick={e => { e.preventDefault(); HandleTweeetClick() }}
                                    >Tweet</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    content here.......
                </section>
                {/* right section  */}
                <section className="w-full">search and suggations
                    <div className="flex">
                        {
                            ImagePreview.map((item) => {
                                <div>
                                    {item}
                                    <img src={item} alt="asd" />
                                </div>
                            })
                        }
                    </div >
                </section>
            </div >
        </>
    );
}
